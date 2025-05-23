/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        playfair: ["Playfair Display", "serif"],
        oswald: ["Oswald", "sans-serif"],
        sourceSans: ["Source Sans Pro", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        firaSans: ["Fira Sans", "sans-serif"],
        ptSans: ["PT Sans", "sans-serif"],
        firaCode: ["Fira Code", "monospace"], // For code blocks or monospace needs
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],   // Extra small (12px)
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // Small (14px)
        base: ["1rem", { lineHeight: "1.5rem" }],    // Base (16px)
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // Large (18px)
        xl: ["1.25rem", { lineHeight: "1.75rem" }],  // Extra large (20px)
        "2xl": ["1.5rem", { lineHeight: "2rem" }],   // 2X large (24px)
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 3X large (30px)
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],  // 4X large (36px)
        "5xl": ["3rem", { lineHeight: "1" }],        // 5X large (48px)
        "6xl": ["3.75rem", { lineHeight: "1" }],     // 6X large (60px)
        "7xl": ["4.5rem", { lineHeight: "1" }],      // 7X large (72px)
        "8xl": ["6rem", { lineHeight: "1" }],        // 8X large (96px)
        "9xl": ["8rem", { lineHeight: "1" }],        // 9X large (128px)
      },
      spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        4: "16px",
        8: "32px",
        16: "64px",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",  // 2px
        md: "0.375rem",  // 6px
        lg: "0.5rem",    // 8px
        full: "9999px",  // Fully rounded
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        primary: {
          DEFAULT: "#1E40AF",
          text: "#212529",
          bgColor: "#f5f7f9",
          darkBg: '#1c1c1c',
          darkBgSecondary: '#1c1c1c',
          darkButton: "#122242",
          darkLight: "#1d1d1d",
          defaultBg: "#f5f7f9",
          active: "#323232",
          border: "#272727",
          contentBg: "#282828"
        },
        default: {
          DEFAULT: "#6B7280",
          light: "#9CA3AF",
          dark: "#4B5563",
          success: "#10B981",
          error: "#EF4444",
          warning: "#F59E0B",
          lightGray: "#F3F4F6",
        },
        white: "#fff"
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "sm": "640px",
          "md": "768px",
          "lg": "1024px",
          "xl": "1280px",
        },
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        flash: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        rotateAndScale: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.2)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        bounce: "bounce 1s infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideIn: "slideIn 0.5s ease-out",
        pulse: "pulse 2s infinite",
        spin: "spin 1s linear infinite",
        shake: "shake 0.5s ease-in-out",
        zoomIn: "zoomIn 0.3s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
        flash: "flash 1s infinite",
        rotateAndScale: "rotateAndScale 2s ease-in-out infinite",
        slow: "fadeIn 3s ease-in-out",
        fast: "fadeIn 0.3s ease-in-out",
        superFast: "fadeIn 0.1s ease-in-out",
      },
      transitionDuration: {
        "0": "0ms",
        "75": "75ms",
        "100": "100ms",
        "150": "150ms",
        "200": "200ms",
        "250": "250ms",
        "300": "300ms",
        "350": "350ms",
        "400": "400ms",
        "500": "500ms",
        "600": "600ms",
        "700": "700ms",
        "800": "800ms",
        "1000": "1000ms",  // 1 second
        "1500": "1500ms",  // 1.5 seconds
        "2000": "2000ms",  // 2 seconds
      },
      transitionTimingFunction: {
        "ease-in": "ease-in",
        "ease-out": "ease-out",
        "ease-in-out": "ease-in-out",
        "linear": "linear",
        "ease-fast-start": "cubic-bezier(0.4, 0, 1, 1)",  // starts fast, slows at end
        "ease-slow-start": "cubic-bezier(0.0, 0, 0.2, 1)",  // starts slow, fast end
        "ease-bounce": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",  // springy bounce
        "ease-elastic": "cubic-bezier(0.7, -0.5, 0.3, 1.5)",  // elastic effect
      },
    },
    screens: {
      "xs": "475px",    // Custom extra small screens
      "sm": "640px",    // Small devices
      "md": "768px",    // Medium devices
      "lg": "1024px",   // Large devices
      "xl": "1280px",   // Extra large devices
      "2xl": "1536px",  // Super large screens
    }

  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio"),],
}

