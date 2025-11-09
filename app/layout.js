import Navigation from "./component/Navigation";
import "./globals.css";

export const metadata={
    title:{
      default:'Ali Raza Bugti | Web Development',
      template:'%s | Web Development'
    },
    description:'This is my Service Page',
    authors:[{name:'Vinod Thapa',},
    {name:'Thapa Technical',url:'thapatechnical.com'},
    ],
    keywords:['nextjs','reactjs','fullstack'],
    icons:{
      icon:'/favicon.jpg'
    }
}

export default function RootLayout({children})
{
  return(
    <html>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
