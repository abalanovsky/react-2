import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CopyButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false,
      textCopied: ''
    }

    this.handleCopy = this.handleCopy.bind(this);
    this.handleTooltipHide = this.handleTooltipHide.bind(this);
  }

  handleCopy() {
    navigator.clipboard.writeText(this.props.text);
    this.setState({textCopied: this.props.text});
    this.setState({showTooltip: true});
  }

  handleTooltipHide() {
    this.setState({showTooltip: false})
  }

  render() {
    const {showTooltip} = this.state;
    const {text} = this.props;

    return (
      <div className="copy-button-container">
        <button onClick={this.handleCopy}>Копіювати до буферу</button>
        {
          showTooltip && (
            <Tooltip text={`${text} було скопійовано до буферу`} onHide={this.handleTooltipHide}/>
          )
        }
      </div>
    );
  }
}

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
}


class Tooltip extends Component {
  componentDidMount() {
    document.addEventListener('click', this.props.onHide);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.onHide);
  }

  render() {
    const {text} = this.props;
    return (
      <div className="tooltip">
        <div className="tooltip-text">{text}</div>
      </div>
    )
  }
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
}
