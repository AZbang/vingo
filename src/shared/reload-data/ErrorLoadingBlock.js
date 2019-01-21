import React from 'react';
import './ErrorLoadingBlock.css';

class ErrorLoadingBlock extends React.Component {
  render = () => (
    <div className="error-loading-block">
      <span className="error-loading-block__icon">😢</span>
      <p>
        <span className="error-loading-block__text">Oopss, произошла ошибка загрузки данных</span>
        <span className="error-loading-block__button" onClick={() => this.props.onReload()}>Перезагрузить</span>
      </p>
    </div>
  )
}

export default ErrorLoadingBlock;
