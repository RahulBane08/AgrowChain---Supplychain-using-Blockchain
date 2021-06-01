import classnames from 'classnames';

import './ui-loader.scss';

const UILoader = props => {
   const { children, blocking, loader, className, tag, overlayColor } = props;

   const Tag = tag;

   return (
      <Tag className={classnames('ui-loader', { [className]: className, show: blocking })}>
         {children}
         {blocking ? (
            <>
               <div
                  className="overlay-ui"
                  {...(blocking && overlayColor ? { style: { backgroundColor: overlayColor } } : {})}
               ></div>
               <div className="loader">{loader}</div>
            </>
         ) : null}
      </Tag>
   );
};

export default UILoader;
