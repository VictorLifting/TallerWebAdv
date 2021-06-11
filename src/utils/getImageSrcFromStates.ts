    const baseExtensionsUrl = '/images/Altar/';

    export const getImageSrcFromStates = (stateName: string = '') => {

    switch(stateName) {
      case 'suelo':
        return `${baseExtensionsUrl}Suelo/suelo.png`;
      case 'soporte':
        return `${baseExtensionsUrl}Soporte/soporte1.png`;
      case 'soporte2':
        return`${baseExtensionsUrl}Soporte/soporte2.png`;
      case 'buda':
        return`${baseExtensionsUrl}Buda/buda.png`;
      case 'buda2':
        return`${baseExtensionsUrl}Buda/buda2.png`;

      case 'iluminacion1':
        return`${baseExtensionsUrl}Iluminacion/iluminacion1.png`;

        case 'iluminacion2':
          return`${baseExtensionsUrl}Iluminacion/iluminacion2.png`;
        
    
     // default:
        //return `${baseExtensionsUrl}`;
    }
  }