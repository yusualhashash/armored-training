'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import jsQR from 'jsqr';
import { Camera, Image as ImageIcon, X, AlertCircle, CheckCircle2, ClipboardPaste, SwitchCamera } from 'lucide-react';
import { importNotificationPackage } from '@/lib/notifications/storage';

interface QrScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (count: number) => void;
}

export function QrScannerModal({ isOpen, onClose, onSuccess }: QrScannerModalProps) {
  const [activeTab, setActiveTab] = useState<'camera' | 'image' | 'paste'>('camera');
  const [pasteValue, setPasteValue] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');
  const [cameraActive, setCameraActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const stopCamera = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  }, []);

  const handleProcessCode = useCallback((rawCode: string) => {
    const res = importNotificationPackage(rawCode);
    if (res.success) {
      setStatusMessage({
        type: 'success',
        text: `تم استلام وتفعيل ${res.count > 0 ? `${res.count} تعميم بنجاح!` : 'التعميم وتحديثه بنجاح!'}`,
      });
      stopCamera();
      setTimeout(() => {
        onSuccess(res.count);
        onClose();
      }, 1200);
    } else {
      setStatusMessage({
        type: 'error',
        text: res.error || 'الرمز غير صالح أو تالف',
      });
    }
  }, [onClose, onSuccess, stopCamera]);

  const tick = useCallback(() => {
    if (!videoRef.current || !canvasRef.current || videoRef.current.readyState !== videoRef.current.HAVE_ENOUGH_DATA) {
      animationFrameRef.current = requestAnimationFrame(tick);
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    if (ctx) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });

      if (code && code.data) {
        handleProcessCode(code.data);
        return; // Stop scan loop
      }
    }

    animationFrameRef.current = requestAnimationFrame(tick);
  }, [handleProcessCode]);

  const startCamera = useCallback(async () => {
    stopCamera();
    setStatusMessage(null);

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setStatusMessage({ type: 'error', text: 'الكاميرا غير مدعومة في هذا المتصفح' });
        setActiveTab('paste');
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: facingMode } },
        audio: false,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute('playsinline', 'true');
        await videoRef.current.play();
        setCameraActive(true);
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    } catch (err) {
      console.warn('Camera error:', err);
      setStatusMessage({
        type: 'error',
        text: 'تعذر الوصول إلى الكاميرا. يرجى السماح بالإذن أو رفع صورة الرمز أو لصق الكود.',
      });
      setCameraActive(false);
    }
  }, [facingMode, stopCamera, tick]);

  useEffect(() => {
    if (isOpen && activeTab === 'camera') {
      startCamera();
    } else {
      stopCamera();
    }
    return () => {
      stopCamera();
    };
  }, [isOpen, activeTab, startCamera, stopCamera]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setStatusMessage({ type: 'info', text: 'جاري فحص صورة الرمز...' });
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setStatusMessage({ type: 'error', text: 'فشل تحليل الصورة' });
          return;
        }
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code && code.data) {
          handleProcessCode(code.data);
        } else {
          setStatusMessage({
            type: 'error',
            text: 'لم يتم العثور على رمز QR صالح في الصورة المختارة',
          });
        }
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleManualPaste = () => {
    if (!pasteValue.trim()) return;
    handleProcessCode(pasteValue.trim());
  };

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === 'environment' ? 'user' : 'environment'));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-3xl border border-emerald-500/30 bg-[#0a150f] p-5 shadow-2xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
              <Camera className="size-5" />
            </div>
            <div>
              <h2 className="text-base font-bold">مسح واستلام تعميم دون إنترنت</h2>
              <p className="text-[11px] text-emerald-400/80">نقل مباشر من جهاز إلى جهاز</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-4 flex rounded-xl border border-white/10 bg-black/40 p-1">
          <button
            type="button"
            onClick={() => setActiveTab('camera')}
            className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all ${
              activeTab === 'camera'
                ? 'bg-emerald-500 text-black shadow-md'
                : 'text-white/60 hover:text-white'
            }`}
          >
            الكاميرا
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('image')}
            className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all ${
              activeTab === 'image'
                ? 'bg-emerald-500 text-black shadow-md'
                : 'text-white/60 hover:text-white'
            }`}
          >
            صورة الرمز
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('paste')}
            className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all ${
              activeTab === 'paste'
                ? 'bg-emerald-500 text-black shadow-md'
                : 'text-white/60 hover:text-white'
            }`}
          >
            لصق كود
          </button>
        </div>

        {/* Tab 1: Live Camera Scan */}
        {activeTab === 'camera' && (
          <div className="mt-4 flex flex-col items-center">
            <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border-2 border-emerald-500/40 bg-black">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                muted
                playsInline
              />
              <canvas ref={canvasRef} className="hidden" />

              {/* Tactical Viewfinder Overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="relative size-48 rounded-xl border-2 border-dashed border-emerald-400/70 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <div className="absolute -top-1 -left-1 size-4 border-t-2 border-l-2 border-emerald-400" />
                  <div className="absolute -top-1 -right-1 size-4 border-t-2 border-r-2 border-emerald-400" />
                  <div className="absolute -bottom-1 -left-1 size-4 border-b-2 border-l-2 border-emerald-400" />
                  <div className="absolute -bottom-1 -right-1 size-4 border-b-2 border-r-2 border-emerald-400" />
                  <div className="absolute inset-x-0 top-1/2 h-0.5 bg-emerald-400/40 shadow-sm animate-pulse" />
                </div>
              </div>

              {!cameraActive && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/90">
                  <Camera className="size-8 text-emerald-400 animate-pulse mb-2" />
                  <p className="text-xs text-white/80">جاري فتح الكاميرا...</p>
                </div>
              )}
            </div>

            <div className="mt-3 flex items-center gap-3">
              <button
                type="button"
                onClick={toggleCamera}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
              >
                <SwitchCamera className="size-3.5" />
                <span>تبديل الكاميرا</span>
              </button>
            </div>
            <p className="mt-2 text-center text-xs text-white/60">
              وجه الكاميرا نحو رمز QR المعروض على شاشة جهاز القائد أو الزميل
            </p>
          </div>
        )}

        {/* Tab 2: Upload Photo / Screenshot */}
        {activeTab === 'image' && (
          <div className="mt-4 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-500/30 bg-black/30 p-6 text-center">
            <ImageIcon className="size-10 text-emerald-400/80 mb-2" />
            <h3 className="text-sm font-semibold text-white">اختر صورة أو لقطة شاشة للرمز</h3>
            <p className="mt-1 text-xs text-white/60 max-w-xs">
              إذا وصلتك صورة الرمز عبر البلوتوث أو المراسلة، يمكنك اختيارها هنا مباشرة
            </p>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-black shadow-lg hover:bg-emerald-400 active:scale-95"
            >
              <ImageIcon className="size-4" />
              <span>اختيار صورة من الجهاز</span>
            </button>
          </div>
        )}

        {/* Tab 3: Paste Code */}
        {activeTab === 'paste' && (
          <div className="mt-4 space-y-3">
            <label className="block text-xs font-medium text-white/80">
              الصق رمز التعميم النصي (يبدأ بـ ATN1:...):
            </label>
            <textarea
              value={pasteValue}
              onChange={(e) => setPasteValue(e.target.value)}
              placeholder="الصق الرمز أو الرابط المشفر هنا..."
              rows={4}
              className="w-full rounded-xl border border-emerald-500/20 bg-black/60 p-3 text-xs text-white placeholder-white/30 focus:border-emerald-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={handleManualPaste}
              disabled={!pasteValue.trim()}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-2.5 text-xs font-bold text-black disabled:opacity-40 hover:bg-emerald-400 active:scale-95"
            >
              <ClipboardPaste className="size-4" />
              <span>تطبيق واستلام التعميم</span>
            </button>
          </div>
        )}

        {/* Status Message */}
        {statusMessage && (
          <div
            className={`mt-4 flex items-center gap-2 rounded-xl p-3 text-xs ${
              statusMessage.type === 'success'
                ? 'border border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
                : statusMessage.type === 'error'
                ? 'border border-red-500/40 bg-red-500/15 text-red-300'
                : 'border border-sky-500/40 bg-sky-500/15 text-sky-300'
            }`}
          >
            {statusMessage.type === 'success' ? (
              <CheckCircle2 className="size-4 shrink-0" />
            ) : (
              <AlertCircle className="size-4 shrink-0" />
            )}
            <span>{statusMessage.text}</span>
          </div>
        )}
      </div>
    </div>
  );
}
