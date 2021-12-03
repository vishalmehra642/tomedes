module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      
      fontFamily: {
        primary: ["Josefin Sans", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        riot: ["riot_squad_nfregular"],
      },
      fontSize: {
        new: "18px",
        17: "17px",
        46: "46px",
        24: "24px",
        40: "40px",
      },
      colors: {
        btnwhite: "#e9e9e9",
        red: "red",
        darkestBlue: "#001546",
        cardBlue: "#022150",
        darkestBlue: "#001546",
        basecol: "#000510",
        white: "#ffffff",
        gray: "#E6E6E6",
        drakGray: "#8F8F8F",
        lightGray: "#C2C2C2",
        darkestgray: "#1D1C1C",
        cardGray: "#262626",
        blackGray: "#717171",
        grayBorder: "#808080",
        borderGray: "#cccccc",
        darkestgray: "#1d1c1c",
        cardGray: "#262626",
        textlight: "#333",
        hover: "#3a7aff",
        linkhover: "#0959ff",
        border: "#707070",
        darkBlue: "#000C27",
        lightBlue: "#3A7AFF",
        midBlue: "#00173A",
        blue: "#001F4E",
        cardColor: "#000D26",
        borderColor: "#E6E6E6",
        gridborderColor: "#7287A6",
        orange: "#FF7B16",
        boxColor: "#0B316B",
        boxSecondary: "#D6D6D6",
        mist: "#7A7A7A",
        darkMist: "#BEBEBE",
        darkOrange: "#703101",
        headerBorder: "#353535",
        grayInput: "#9b9b9b",
        lightwhite: "#BFBFBF",
        btnGreen: "#7fcd17",
        locationFormBorder: "#E8E5E5",
        blackNew: {
          100: "#333",
          200: "#4c4643",
          300: "#5c6666",
          400: "#989898",
          500: "#495464;",
          600: "#333333",
          700 : "#828282"
        },
        lightwhite: "#BFBFBF",
        newGray: "#4c4643",
        newBorder: "#cccccc",
        hoverBtn: "#00008B",
        lightestBlue: "#fafbfc",
        facbook: "#3f51b5",
        linkdein: "#2b88d1",
        twitter: "#3faaf5",
        inputGray: "#90969b",
        inputBorder: "#bababa",
        textgray: "#B2B2B2",
        hoverYellow : "#FFAA16"
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px"
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://skins.tomedes.com/frontend/images/home-en/network_bg3.webp')",
        "services-pattern":
          "url('https://skins.tomedes.com/frontend/images/home-en/area-bg.webp')",
        "who-we-are":
          "url('https://skins.tomedes.com/frontend/images/home-en/whoweare_bg2.webp')",
        "banner-img":
          "url('https://skins.tomedes.com/frontend/images/home-en/homepage_banner_en_black.webp')",
        "contact-img":
          "url('https://skins.tomedes.com/frontend/images/blue-strip-contact.svg')",
        "translation-banner":
          "url('https://skins.tomedes.com/frontend/images/banner-new19.png')",
        "black-strip":
          "url('https://skins.tomedes.com/frontend/images/grey-strip-h2.svg')",
        "translation-confrence":
          "url('https://skins.tomedes.com/frontend/images/Conference-bg.jpg')",
        "banner-image":
          "url('https://skins.tomedes.com/frontend/images/Conference-inner-bg.jpg')",
        "industry-bg-image":
          "url('https://skins.tomedes.com/frontend/images/industry-banner.jpg')",
        "quote-img":
          "url('https://skins.tomedes.com/frontend/images/location_new/cta_sprites.png')",
        "location-banner":
          "url('https://skins.tomedes.com/frontend/images/location_new/mainlocations_bg.webp')",
          "houston-bg":
          "url('https://skins.tomedes.com/frontend/images/location_new/bg_dot.webp')"
      },
     
      width: {
        157: "157px",
        300: "300px",
        320: "320px",
        250: "250px",
        222: "222px",
        930: "930px",
        '37per': '36.33333%',
        '23per': '23.3333%',
        '22REM': '352px',
        93 : "93%"
      },
      height: {
        157: "157px",
        58: "58px",
        600: "600px",
        255: "255px",
        648: "648px",
        720: "720px",
        904: "904px",
        560:"560px",
        494:"494px"
      },
      margin: {
        48: "48px",
        112: "112px",
        224: "224px",
        300: "300px",
        548: "548px",
        416: "416px",
      },
      screens: {
        laptop: "1920px",
        fourK: "2010px",
        120: "120px",
        100: "100px",
      },
      minHeight: {
        132: "132px",
      },
      screens: {
        mtab: { max: "767px" },
        lap: { min: "992px" },
        slap: { max: "991px" },
        mlap: { max: "1200px" },
        mmob: { max: "479px" },
        mlg: { min: "992px", max: "1200px" },
        mmd: { min: "768px", max: "991px" },
      },
      backgroundPosition: {
        bgless: "-20px -179px",
        bgemail: "-20px -20px",
        bgcall: "-360px -20px",
      },
      maxWidth: {
        "370" : "370px"
       },
       minWidth: {
        "300" : "300px"
       },
       maxHeight: {
       "460" : "460px"
       }
    },
  },
  variants: {
    extend: {
      display: ["last"],
    },
  },
  plugins: [],
};
