import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Vision Craft | Strategic Consultancy';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(to bottom right, #c9a962, #d4bc7e)',
            width: 200,
            height: 200,
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 120,
            color: 'white',
            fontWeight: 600,
            marginBottom: 40,
          }}
        >
          V
        </div>
        <div
          style={{
            fontSize: 48,
            color: '#c9a962',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Vision Craft
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
