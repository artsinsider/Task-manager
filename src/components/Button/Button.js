import React, { Component, PropTypes} from 'react'

export default class Button extends Component {
    static propTypes = {
        text : PropTypes.string.isRequired,
        clickHandler: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        if(this.props.id == nextProps.id
            &&
            this.props.clickHandler == nextProps.clickHandler
            &&
            this.props.text == nextProps.text)
            {
                return false;
            }
        return true;
    }

    /**
     * Обработчик клика
     */

    clickHandler (x) {
        this.props.clickHandler(x)
    }

    render() {
        const {text, className,id} = this.props;
        return (
            <span>
                <button
                    className={className}
                    onClick={this.clickHandler}
                    id={id}>
                    {text}
                </button>
            </span>
        )
    }
}

Button.defaultProps = {
    className:'button',
    text: 'Button',
    clickHandler: x=>x,
    id:'1'
};