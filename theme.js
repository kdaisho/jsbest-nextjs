const theme = {
  breakpoints: {
    maxMobile: '768px',
    maxTablet: '1024px',
  },
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    justifyContent: ['center', 'flex-start'],
  },
  colors: {
    background: '',
  },
  courses: {
    card: {
      background: '#fff',
      flex: '0 0 98%',
      overflow: 'hidden',
      margin: '1rem .5rem 2rem',
      flex: ['0 0 98%', '0 0 47%', '0 0 320px'],
      hero: {
        alignItems: 'flex-start',
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'flex-end',
        height: '200px',
        position: 'relative',
      },
      title: {
        background: 'blue',
      },
    },
  },
}

export default theme
