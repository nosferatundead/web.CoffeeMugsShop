/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      letterSpacing: {
        '2px': '2px',
      },
      fontSize: {
        sm: ['12px', '16px'],
        base: ['16px', '18px'],
        base2:['16px', '28px'],
        base_2:['19px', '32px'],
        lg: ['18px', '28px'],
        lg2: ['20px', '32px'],
        lg_2: ['28px', '40px'],
        lg3: ['36px', '50px'],
        xl: ['47px', '60px'],
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
      },
    },
    plugins: [],
  }
}

