const spacing = {
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
  "11": "2.75rem",
  "12": "3rem",
  "13": "3.25rem",
  "14": "3.5rem",
  "15": "3.75rem",
  "16": "4rem",
  "17": "4.25rem",
  "18": "4.5rem",
  "19": "4.75rem",
  "20": "5rem",
  "21": "5.25rem",
  "22": "5.5rem",
  "23": "5.75rem",
  "24": "6rem",
  "25": "6.25rem",
  "26": "6.5rem",
  "27": "6.75rem",
  "28": "7rem",
  "29": "7.25rem",
  "30": "7.5rem",
  "31": "7.75rem",
  "32": "8rem",
  "33": "8.25rem",
  "34": "8.5rem",
  "35": "8.75rem",
  "36": "9rem",
  "37": "9.25rem",
  "38": "9.5rem",
  "39": "9.75rem",
  "40": "10rem",
  "41": "10.25rem",
  "42": "10.5rem",
  "43": "10.75rem",
  "44": "11rem",
  "45": "11.25rem",
  "46": "11.5rem",
  "47": "11.75rem",
  "48": "12rem",
  "49": "12.25rem",
  "50": "12.5rem",
  "51": "12.75rem",
  "52": "13rem",
  "53": "13.25rem",
  "54": "13.5rem",
  "55": "13.75rem",
  "56": "14rem",
  "57": "14.25rem",
  "58": "14.5rem",
  "59": "14.75rem",
  "60": "15rem",
  "61": "15.25rem",
  "62": "15.5rem",
  "63": "15.75rem",
  "64": "16rem",
  "65": "16.25rem",
  "66": "16.5rem",
  "67": "16.75rem",
  "68": "17rem",
  "69": "17.25rem",
  "70": "17.5rem",
  "71": "17.75rem",
  "72": "18rem",
  "73": "18.25rem",
  "74": "18.5rem",
  "75": "18.75rem",
  "76": "19rem",
  "77": "19.25rem",
  "78": "19.5rem",
  "79": "19.75rem",
  "80": "20rem",
  "81": "20.25rem",
  "82": "20.5rem",
  "83": "20.75rem",
  "84": "21rem",
  "85": "21.25rem",
  "86": "21.5rem",
  "87": "21.75rem",
  "88": "22rem",
  "89": "22.25rem",
  "90": "22.5rem",
  "91": "22.75rem",
  "92": "23rem",
  "93": "23.25rem",
  "94": "23.5rem",
  "95": "23.75rem",
  "96": "24rem",
  "97": "24.25rem",
  "98": "24.5rem",
  "99": "24.75rem",
  "100": "25rem",
  "101": "25.25rem",
  "102": "25.5rem",
  "103": "25.75rem",
  "104": "26rem",
  "105": "26.25rem",
  "106": "26.5rem",
  "107": "26.75rem",
  "108": "27rem",
  "109": "27.25rem",
  "110": "27.5rem",
  "111": "27.75rem",
  "112": "28rem",
  "113": "28.25rem",
  "114": "28.5rem",
  "115": "28.75rem",
  "116": "29rem",
  "117": "29.25rem",
  "118": "29.5rem",
  "119": "29.75rem",
  "120": "30rem",
  "121": "30.25rem",
  "122": "30.5rem",
  "123": "30.75rem",
  "124": "31rem",
  "125": "31.25rem",
  "126": "31.5rem",
  "127": "31.75rem",
  "128": "32rem",
  "129": "32.25rem",
  "130": "32.5rem",
  "131": "32.75rem",
  "132": "33rem",
  "133": "33.25rem",
  "134": "33.5rem",
  "135": "33.75rem",
  "136": "34rem",
  "137": "34.25rem",
  "138": "34.5rem",
  "139": "34.75rem",
  "140": "35rem",
  "141": "35.25rem",
  "142": "35.5rem",
  "143": "35.75rem",
  "144": "36rem",
  "145": "36.25rem",
  "146": "36.5rem",
  "147": "36.75rem",
  "148": "37rem",
  "149": "37.25rem",
  "150": "37.5rem",
  "151": "37.75rem",
  "152": "38rem",
  "153": "38.25rem",
  "154": "38.5rem",
  "155": "38.75rem",
  "156": "39rem",
  "157": "39.25rem",
  "158": "39.5rem",
  "159": "39.75rem",
  "160": "40rem",
};
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV == 'production',
    content: ['./**/*.vue'],
  },
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing,
      fontFamily: {
        body: ["Poppins"],
      },
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '4/5': '80vh',
      'full': '100%',
    }
  },
  variants: {
    width: ["responsive", "hover"],
    display: ["responsive", "hover", "group-hover"],
  },
  plugins: [],

};
