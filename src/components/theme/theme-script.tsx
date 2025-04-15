export const themeInitScript = `
  (function() {
    try {
      const root = document.documentElement;
      
      const storedMode = localStorage.getItem('mode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialMode = storedMode || (prefersDark ? 'dark' : 'light');
    } catch (e) {
      document.documentElement.classList.add('light');
    }
  })();
`;

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: themeInitScript,
      }}
    />
  );
}
