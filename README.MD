Based upon the `Baylor Breaks It Down` video tutorial [Firebase Tutorial With React Hooks](https://youtu.be/rSgbYCdc4G0)

1) ### Set up React app `yarn create react-app app`

2) ### Add app Dependencies  (several added for future styling)
    `yarn add react-spinners-kit styled-components reinspect`  

    - For `react-loaded-spinner`, you must also add `styled-components`
    - For `Ant Design`, you must also add add to `index.html`
        ~~~
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.min.css" />
3) ### React DevTools extension `hooks` configuration        
    - To utilize the `redux devtools extension` with 'hooks, add the following to `src/index.js`
        import `StateInspector`
        ~~~ js
        import { StateInspector } from 'reinspect';
        ~~~
        Define a `Wrapper` component and wrap the `App` component 
        ~~~ js
        import {StateInspector} from 'reinspect';

        const WrapApp = () => {
            return (
                <StateInspector>
                    <App/>
                </StateInspector>
            )
        }

        ReactDOM.render(<WrapApp />, document.getElementById('root'));
        ~~~ 