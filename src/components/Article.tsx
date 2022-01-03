interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Article(props: Props) {
  return (
    <article className={"flex items-center overflow-hidden " + props.className}>
      {props.children}
    </article>
  );
}

export default Article;
