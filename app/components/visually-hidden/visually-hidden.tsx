import { forwardRef } from "react";
import styles from "./visually-hidden.module.css";
import { classes } from "~/lib/utils";

type SpanProps = React.ComponentPropsWithoutRef<"span"> & {
  showOnFocus?: boolean;
  visible?: boolean;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  as?: any;
};

export const VisuallyHidden = forwardRef<HTMLSpanElement, SpanProps>(
  (
    {
      className,
      showOnFocus,
      as: Component = "span",
      children,
      visible,
      ...rest
    },
    ref
  ) => {
    return (
      <Component
        className={classes(styles.hidden, className)}
        data-hidden={!visible && !showOnFocus}
        data-show-on-focus={showOnFocus}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);
