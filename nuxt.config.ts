// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
      head: {
          link: [
              {
                  rel: 'stylesheet',
                  href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
                  integrity: 'sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD',
                  crossorigin: 'anonymous'
              },
              {
                  rel: 'preconnect',
                  href: 'https://fonts.googleapis.com'
              },
              {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700'
              },
              {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic'
              },
              {
                rel: 'stylesheet',
                href: 'https://startbootstrap.github.io/startbootstrap-freelancer/css/styles.css'
              },
              {
                rel: 'icon',
                type: 'image/x-icon',
                href: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/favicon.ico'
              }
          ],
          script: [
              {
                  src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
                  integrity: 'sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN',
                  crossorigin: 'anonymous'

         
              },
              {
                src: 'https://use.fontawesome.com/releases/v6.3.0/js/all.js',
                crossorigin: 'anonymous'
              },
              // {
              //   src: 'https://startbootstrap.github.io/startbootstrap-freelancer/js/scripts.js'
              // },
              // {
              //   src: 'https://cdn.startbootstrap.com/sb-forms-0.4.1.js'
              // }
          ],
      }
  }
})