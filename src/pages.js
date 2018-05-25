import React, {Component} from 'react';

import Page1 from './1';
import Page2 from './2';
import Page3 from './3';

export default class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pages: [<Page1 page={props.page}/>, <Page2 page={props.page}/>, <Page3 page={props.page}/>],
          currentPage: props.page
        };
    }
    render(){
        return(
            this.state.pages[this.state.currentPage]
        );
    }

    static getDerivedStateFromProps(props, state){
        // console.log(props);
        // console.log('state',state);
        if(props.page < 0)
            return({currentPage:0});
        else if (props.page > state.pages.length-1)
            return({currentPage:state.pages.length-1})
        else
            return({currentPage:props.page})
    }
}

// function FadeAndSlideTransition ({children, duration, in: inProp}) {

//     const defaultStyle = {
//       transition: `${duration}ms ease-in`,
//       transitionProperty: 'opacity, transform'
//     }
  
//     const transitionStyles = {
//       entering: {
//         opacity: 0,
//         transform: 'translateY(-10%)'
//       },
//       entered: {
//         opacity: 1,
//         transform: 'translateY(0)'
//       },
//       exiting: {
//         opacity: 0,
//         transform: 'translateY(-10%)'
//       }
//     }
  
//     return (
//       <Transition in={inProp} timeout={{
//         enter: 0,
//         exit: duration
//       }}>
//         {
//           (status) => {
//             if (status === 'exited') {
//                 console.log('exited')
//               return null
//             }
//             const currentStyles = transitionStyles[status]
//             console.log('transitioning')
//             return React.cloneElement(children, {
//               style: Object.assign({}, defaultStyle, currentStyles)
//             })
//           }
//         }
//       </Transition>
//     )
//   }