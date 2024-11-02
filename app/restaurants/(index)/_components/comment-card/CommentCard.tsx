type Props = {
  author: "홍준혁" | "김령담";
  comment: string;
};

export default function CommentCard({ author, comment }: Props) {
  return (
    <div className="rounded-lg bg-gray-100 text-gray-800 p-4 shadow-md max-w-[90%] mx-auto">
      <span className="block text-sm font-semibold mb-2">
        {author} 평론가 한줄평
      </span>
      <p className="text-base">{comment}</p>
    </div>
  );
}
