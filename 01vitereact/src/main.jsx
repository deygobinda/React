import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Cutom App !</h1>
        </div>
    )
}

 
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement1 = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherElement2 =  "Gobinda dey"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target: '_blank'},
    'Click me to visit google ',
    anotherElement2
)



ReactDOM.createRoot(document.getElementById('root')).render(

    

     reactElement

    //anotherElement1

    // MyApp()
    // <>
    // <App />
   
    // {/* <MyApp /> */}
    // </>
  
)
