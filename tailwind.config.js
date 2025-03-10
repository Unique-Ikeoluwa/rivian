 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        btn: '#ffac00',
        body: '#fafafa',
        bg1: '#212121',
        bgc: '#a15842',
        bgc1: '#151515',
        fgc: '#7a8579'
      },
      space: ({ theme }) => ({
        ...theme('spacing'),
      }),
      spacing: {
        bpx: '120px',
        mpx: '690px'
     },
     minWidth: ({ theme }) => ({
      ...theme('spacing')
     }),
     borderRadius: {
      bro: '40px'
     }
    }
  },
  plugins: [],
}