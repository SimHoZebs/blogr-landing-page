interface Props extends React.HTMLAttributes<HTMLDivElement> {
  paragraph: { title: string; desc: string }[];
}

const ArticleText = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-20 md:w-1/2 text-center z-10 <md:px-9">
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
