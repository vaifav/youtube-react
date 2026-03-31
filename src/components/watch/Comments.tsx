import { CircleUserRound, X } from "lucide-react";
import type { CommentType } from "../../utils/types";

const Comments = ({ isCommentExpanded, setIsCommentExpanded }: CommentType) => {
	const closeComment = () => {
		setIsCommentExpanded(false);
	};

	const openComment = () => {
		setIsCommentExpanded(true);
	};

	return (
		<div className="md:hidden rounded-xl px-2 py-3 flex flex-col gap-2 dark:bg-neutral-800">
			<h1 className="text-xl font-semibold">Comments</h1>
			<div className="flex gap-2" onClick={openComment}>
				<div>
					<CircleUserRound />
				</div>
				<div className="flex items-center grow rounded-full px-2 text-[0.9rem] dark:bg-neutral-700">
					<span>Add comments...</span>
				</div>
			</div>
			<div
				className={`${isCommentExpanded ? "block" : "hidden"} w-full h-full overflow-y-scroll absolute top-0 left-0 rounded-t-xl dark:bg-neutral-900`}
			>
				<div className="flex justify-between sticky top-0 rounded-[inherit] px-2 py-4 border-b border-neutral-500 dark:bg-inherit">
					<h1 className="text-xl font-semibold">Comments</h1>
					<div onClick={closeComment}>
						<X />
					</div>
				</div>
				<div className="p-2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nesciunt nulla saepe
					expedita reiciendis a quia iusto ullam, eaque, provident aperiam sed laborum aspernatur
					mollitia pariatur temporibus unde repellat repellendus. Sequi explicabo, delectus iure
					voluptates nihil, blanditiis tenetur quasi dolorem vitae impedit dignissimos architecto non,
					pariatur esse assumenda quidem asperiores magni recusandae saepe et nulla quae? Molestias ipsa
					labore at. Ipsum eos, quae veniam repudiandae laudantium ex repellendus omnis, cumque
					blanditiis eaque, velit mollitia distinctio dolorum repellat corporis accusamus tenetur
					laborum? Saepe sunt quo animi nemo explicabo sit fugiat quam. Tenetur quasi officia laudantium
					eligendi eius quam quisquam doloremque cupiditate natus at beatae fugiat consectetur assumenda,
					voluptas culpa magnam, perferendis minima itaque? Dolores qui earum eius ex velit iure iste!
					Incidunt adipisci doloribus maxime, error quos ratione perferendis possimus ad iusto
					perspiciatis. Similique ut vero deleniti laudantium a. Vitae pariatur recusandae, magnam eius
					at quae corporis ullam earum possimus ipsum. Laboriosam architecto, deleniti esse incidunt
					alias facilis veritatis, distinctio aliquid doloremque ad illum officia recusandae, unde ipsum
					debitis quis nisi expedita excepturi reprehenderit non eligendi ut omnis! Obcaecati, saepe
					sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nesciunt nulla
					saepe expedita reiciendis a quia iusto ullam, eaque, provident aperiam sed laborum aspernatur
					mollitia pariatur temporibus unde repellat repellendus. Sequi explicabo, delectus iure
					voluptates nihil, blanditiis tenetur quasi dolorem vitae impedit dignissimos architecto non,
					pariatur esse assumenda quidem asperiores magni recusandae saepe et nulla quae? Molestias ipsa
					labore at. Ipsum eos, quae veniam repudiandae laudantium ex repellendus omnis, cumque
					blanditiis eaque, velit mollitia distinctio dolorum repellat corporis accusamus tenetur
					laborum? Saepe sunt quo animi nemo explicabo sit fugiat quam. Tenetur quasi officia laudantium
					eligendi eius quam quisquam doloremque cupiditate natus at beatae fugiat consectetur assumenda,
					voluptas culpa magnam, perferendis minima itaque? Dolores qui earum eius ex velit iure iste!
					Incidunt adipisci doloribus maxime, error quos ratione perferendis possimus ad iusto
					perspiciatis. Similique ut vero deleniti laudantium a. Vitae pariatur recusandae, magnam eius
					at quae corporis ullam earum possimus ipsum. Laboriosam architecto, deleniti esse incidunt
					alias facilis veritatis, distinctio aliquid doloremque ad illum officia recusandae, unde ipsum
					debitis quis nisi expedita excepturi reprehenderit non eligendi ut omnis! Obcaecati, saepe
					sapiente.
				</div>
			</div>
		</div>
	);
};

export default Comments;
