interface Props extends React.HTMLAttributes<HTMLDivElement> {
  paragraph: { title: string; desc: string }[];
}

const ArticleText = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-20 w-2/3 ">
      {props.paragraph.map((paragraph, index) => (
        <div key={index} className="flex flex-col gap-y-6">
          <h1 className="text-3xl font-semibold">{paragraph.title}</h1>
          <p>{paragraph.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleText;
