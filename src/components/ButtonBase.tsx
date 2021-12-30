const ButtonBase = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, children, ...rest } = props;
  return (
    <button className={"font-ubuntu font-medium " + className} {...rest}>
      {children}
    </button>
  );
};

export default ButtonBase;
