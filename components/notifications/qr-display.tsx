'use client';

import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { Download, Copy, Check, QrCode as QrIcon } from 'lucide-react';

interface QrDisplayProps {
  value: string;
  title?: string;
  size?: number;
}

export function QrDisplay({ value, title, size = 260 }: QrDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !value) return;

    QRCode.toCanvas(
      canvasRef.current,
      value,
      {
        width: size,
        margin: 2,
        color: {
          dark: '#03140b', // Deep tactical emerald black
          light: '#ffffff',
        },
        errorCorrectionLevel: 'M',
      },
      (err) => {
        if (err) {
          console.error('QR code generation error:', err);
          setError('تعذر إنشاء رمز الاستجابة السريعة');
        } else {
          setError(null);
        }
      }
    );
  }, [value, size]);

  const handleDownloadImage = () => {
    if (!canvasRef.current) return;
    try {
      const url = canvasRef.current.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = `armored-notice-qr-${Date.now()}.png`;
      a.click();
    } catch (e) {
      console.error('Download failed', e);
    }
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="relative rounded-2xl border-2 border-emerald-500/40 bg-white p-3 shadow-xl">
        <canvas ref={canvasRef} className="block rounded-lg max-w-full h-auto" />
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 p-4 text-sm text-red-400">
            {error}
          </div>
        )}
      </div>

      {title && (
        <p className="text-xs sm:text-sm font-semibold text-emerald-300">
          {title}
        </p>
      )}

      <p className="text-xs text-white/60 max-w-xs">
        وجه كاميرا جهاز المستخدم الآخر نحو هذا الرمز لاستلام التعميم فوراً دون إنترنت
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
        <button
          type="button"
          onClick={handleDownloadImage}
          className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-3 py-2 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-500/25 active:scale-95"
        >
          <Download className="size-3.5" />
          <span>حفظ صورة الرمز</span>
        </button>

        <button
          type="button"
          onClick={handleCopyCode}
          className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition-all hover:bg-white/10 active:scale-95"
        >
          {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
          <span>{copied ? 'تم النسخ!' : 'نسخ الرمز النصي'}</span>
        </button>
      </div>
    </div>
  );
}
