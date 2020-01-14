import React, {Component} from 'react'

export default class Hello extends Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <p>Hello world!</p>
    }
}
