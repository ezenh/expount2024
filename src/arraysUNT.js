const institutions2 = [
    {
      type: "Facultades",
      name: "Agronomía, Zootecnia y Veterinaria",
      logo: 'agro.png',
      icon: 'vet-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-agronomia-zootecnia-y-veterinaria/",
      careers: [
        {
          name: "Ingeniería Agronómica",
          duration: "5 años"
        },
        {
          name: "Licenciatura en Zootecnia",
          duration: "5 años"
        },
        {
          name: "Medicina Veterinaria",
          duration: "5 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/K1XtvSqkfGs" title="Micro EXPO UNT Virtual AGRONOMIA ZOOTECNIA Y VETERINARIA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Facultades",
      name: "Arquitectura y Urbanismo",
      logo: 'arq.png',
      icon: 'arch-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-arquitectura-y-urbanismo/",
      careers: [
        {
          name: "Arquitectura",
          duration: "5 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/bmQ53FcuUqs" title="Micro EXPO UNT Virtual ARQUITECTURA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Facultades",
      name: "Artes",
      logo: 'artes.png',
      icon: 'art-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-artes/",
      careers: [
        {
          name: "Licenciatura en Artes Visuales",
          duration: "5 años"
        },
        {
          name: "Licenciatura en Música",
          duration: "5 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/6D0mS67Okgo" title="Micro EXPO UNT Virtual FACULTAD DE ARTES" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Facultades",
      name: "Bioquímica, Química y Farmacia",
      logo: 'bioq.png',
      icon: 'chem-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-bioquimica-quimica-y-farmacia/",
      careers: [
        {
          name: "Bioquímica",
          duration: "5 años"
        },
        {
          name: "Farmacia",
          duration: "5 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/A_ia70Gw0FI" title="Micro EXPO UNT Virtual BIOQUIMICA QUIMICA FARMACIA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Facultades",
      name: "Ciencias Económicas",
      logo: 'econ.png',
      icon: 'eco-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-ciencias-economicas/",
      careers: [
        {
          name: "Contador Público Nacional",
          duration: "5 años"
        },
        {
          name: "Licenciatura en Administración",
          duration: "5 años"
        },
        {
          name: "Licenciatura en Economía",
          duration: "5 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/v5c_pnf5BPw" title="Micro EXPO UNT Virtual CIENCIAS ECONOMICAS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Facultades",
      name: "Ciencias Exactas y Tecnología",
      logo: 'facet.png',
      icon: 'math-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-ciencias-exactas-y-tecnologia/",
      careers: [
        {
          name: "Licenciatura en Matemáticas",
          duration: "5 años"
        },
        {
          name: "Licenciatura en Física",
          duration: "5 años"
        },
        {
          name: "Ingeniería en Computación",
          duration: "5 años"
        },
        {
          name: "Ingeniería Industrial",
          duration: "5 años"
        }
      ],
      video:'<iframe src="https://www.youtube.com/embed/B8bV0-SaVfo" title="Micro EXPO UNT Virtual FACET" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Facultades",
      name: "Ciencias Naturales e Instituto Miguel Lillo",
      logo: 'lillo.png',
      icon: 'bio-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-ciencias-naturales-e-instituto-miguel-lillo/",
      careers: [
        {
          name: "Licenciatura en Ciencias Biológicas",
          duration: "5 años"
        },
        {
          name: "Licenciatura en Ciencias Geológicas",
          duration: "5 años"
        },
        {
          name: "Licenciatura en Ciencias Ambientales",
          duration: "5 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/PktzAGQOvj0" title="Micro EXPO UNT Virtual CIENCIAS NATURALES e INSTITUTO MIGUEL LILLO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Facultades",
      name: "Derecho y Ciencias Sociales",
      logo: 'derecho.png',
      icon: 'law-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-derecho-y-ciencias-sociales/",
      careers: [
        {
          name: "Abogacía",
          duration: "5 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/rGWuqgQH4kE" title="Micro EXPO UNT Virtual FACULTAD DE DERECHO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Facultades",
      name: "Educación Física",
      logo: 'edfisica.png',
      icon: 'gym-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-educacion-fisica/",
      careers: [
        {
          name: "Profesorado en Educación Física",
          duration: "5 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/nks1d8Fu2Jo" title="Micro EXPO UNT Virtual FACULTAD DE EDUCACION FISICA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Facultades",
      name: "Filosofía y Letras",
      logo: 'letras.png',
      icon: 'philo-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-filosofia-y-letras/",
      careers: [
        {
          name: "Licenciatura en Filosofía",
          duration: "5 años"
        },
        {
          name: "Licenciatura en Letras",
          duration: "5 años"
        },
        {
          name: "Licenciatura en Historia",
          duration: "5 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/XLMMN9fj6ww" title="Micro EXPO UNT Virtual FILOSOFIA Y LETRAS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Facultades",
      name: "Medicina",
      logo: 'medicina.png',
      icon: 'med-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-medicina/",
      careers: [
        {
          name: "Medicina",
          duration: "6 años"
        },
        {
          name: "Licenciatura en Obstetricia",
          duration: "5 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/yPXZ3blNKcE" title="Micro EXPO UNT Virtual MEDICINA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Facultades",
      name: "Odontología",
      logo: 'odonto.png',
      icon: 'odonto-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-odontologia/",
      careers: [
        {
          name: "Odontología",
          duration: "5 años"
        }
      ],
      video: '	<iframe src="https://www.youtube.com/embed/s8s1cLHrq8M" title="Micro EXPO UNT Virtual ODONTOLOGIA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Facultades",
      name: "Psicología",
      logo: 'psico.png',
      icon: 'psycho-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/facultad-de-psicologia/",
      careers: [
        {
          name: "Licenciatura en Psicología",
          duration: "5 años"
        }
      ],
      video: '	<iframe src="https://www.youtube.com/embed/EMT5IZu8H3I" title="Micro EXPO UNT Virtual PSICOLOGÍA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },









    {
      type: "Escuelas",
      name: "Bellas Artes",
      logo: 'bartes.png',
      icon: 'art-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/escuela-de-bellas-artes/",
      careers: [
        {
          name: "Licenciatura en Artes Visuales",
          duration: "5 años"
        },
        {
          name: "Profesorado en Artes Visuales",
          duration: "5 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/UDJpNLINt-0" title="Micro EXPO UNT Virtual ESCUELA DE BELLAS ARTES" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Escuelas",
      name: "Cine, Video y Televisión",
      logo: 'cine.png',
      icon: 'cine-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/escuela-universitaria-de-cine-video-y-television/",
      careers: [
        {
          name: "Licenciatura en Cine, Video y Televisión",
          duration: "5 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/FgOGCLNvAv8" title="Micro EXPO UNT Virtual CINE EUCVYTV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Escuelas",
      name: "Enfermería",
      logo: 'enfer.png',
      icon: 'med-icon.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/escuela-de-enfermeria/",
      careers: [
        {
          name: "Licenciatura en Enfermería",
          duration: "4 años"
        },
        {
          name: "Tecnicatura Universitaria en Enfermería",
          duration: "3 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/apd_ZYQw5bY" title="Micro EXPO UNT Virtual ENFERMERIA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      type: "Escuelas",
      name: "Instituto Superior de Música",
      logo: 'musica.png',
      icon: 'music-ico.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/escuela-universitaria-de-musica/",
      careers: [
        {
          name: "Profesorado en Música con Orientación en Educación Musical",
          duration: "4 años"
        },
        {
          name: "Profesorado en Música con Orientación en Dirección Coral",
          duration: "4 años"
        },
        {
          name: "Profesorado en Música con Orientación en Instrumento",
          duration: "4 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/hGRHtgIJdMY" title="Micro EXPO UNT Virtual ISMUNT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },

    {
      type: "Escuelas",
      name: "Instituto Técnico",
      logo: 'tecnico.png',
      icon: 'ing-ico.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/instituto-tecnico/",
      careers: [
        {
          name: "Tecnicatura Superior en Controles Automáticos Industriales",
          duration: "3 años"
        },
        {
          name: "Tecnicatura Superior en Electricidad Industrial",
          duration: "3 años"
        },
        {
          name: "Tecnicatura Superior en Diseño Industrial",
          duration: "3 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/bOLd9qvpi20" title="Micro EXPO UNT Virtual INSTITUTO TECNICO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },

    {
      type: "Escuelas",
      name: "Liceo Vocacional Sarmiento",
      logo: 'sarmiento.png',
      icon: 'teach-ico.png',
      link: "https://www.unt.edu.ar/expount/facultades-y-escuelas/escuela-y-liceo-vocacional-sarmiento/",
      careers: [
        {
          name: "Profesorado de Educación Primaria",
          duration: "4 años"
        },
        {
          name: "Profesorado de Educación Inicial",
          duration: "4 años"
        }
      ],
      video: '<iframe src="https://www.youtube.com/embed/2IwpzHdPgho" title="Micro EXPO UNT Virtual ESCUELA SARMIENTO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }
  ];