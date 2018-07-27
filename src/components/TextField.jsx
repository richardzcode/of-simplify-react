import react from 'react';
import { TextField as _TextField } from 'office-ui-fabric-react/lib/TextField';

export default class TextField extends react.Component {
  constructor(props) {
    super(props);

    this.handleRenderPrefix = this.handleRenderPrefix.bind(this);
  }

  handleRenderPrefix(props) {
    const { prefix } = props;
    const { style, onRenderPrefix } = this.props;
    const prefixStyle = style? style.prefix : null;

    return <span style={prefixStyle}>{onRenderPrefix? onRenderPrefix(props) : prefix}</span>
  }

  render() {
    return (
      <_TextField
        {...this.props}
        onRenderPrefix={this.handleRenderPrefix}
      />
    )
  }
}
