 module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com','https://localhost:3000'],
  },
  // images: {
  //   loader: 'imgix',
  //   path: 'https://localhost:3000',
  // },
  webpack5: true,
  distDir: 'build',
  env:{
    PUBLIC_FIRE_APIKEY:           'AIzaSyBVAlL57jaeb3wIaAOQw4rfO41nZBBEs9g',  
    PUBLIC_FIRE_AUTHDOMAIN:       'logoteca-864c2.firebaseapp.com', 
     PUBLIC_FIRE_DATABASE_URL:    'https ://logoteca-864c2.firebaseio.com',   
     PUBLIC_FIRE_PROJECT_ID:      'logoteca-864c2',  
     PUBLIC_FIRE_STORAGE_BUCKET:  'logoteca-864c2.appspot.com', 
     PUBLIC_FIRE_MESSAGE_SEND_ID:  '6657771714',
     PUBLIC_FIRE_API_ID:          '1:6657771714:web:cae48f474ca120f497535b' ,
  }
}

 


 