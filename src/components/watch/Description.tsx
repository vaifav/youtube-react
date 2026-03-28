import { useState } from "react";

const Description = () => {
	const [expandDescription, setExpandDescription] = useState(false);
	return (
		<>
			<div
				className={`w-full dark:bg-neutral-800 rounded-xl ${expandDescription ? "h-fit" : "h-30"} p-2 overflow-hidden relative`}
			>
				<div className="pb-9">
					<h1>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium molestiae repudiandae
						omnis, quo rerum aperiam mollitia quos commodi quis aut vel a assumenda voluptatum fuga nemo,
						autem tempora obcaecati architecto? Ipsum recusandae dolor quos ducimus, quaerat eos porro ex
						libero neque hic consectetur natus delectus similique magni suscipit pariatur minima. Deleniti
						velit repellat facere error ducimus? Id recusandae iste ipsum! At dolor minus debitis
						exercitationem nemo quisquam ipsam est, inventore dolorem alias impedit quod quos non id
						velit, libero iure sit placeat nesciunt mollitia necessitatibus temporibus fuga eos. Quas,
						explicabo. Neque, ex placeat ullam reiciendis ratione aut omnis sapiente ut alias, accusantium
						voluptates, pariatur aliquam maxime a in dolorum ad possimus inventore. Expedita quidem est
						veniam doloremque doloribus consequatur tempore. Qui, dolor aperiam voluptate, dolorum
						reprehenderit, amet non asperiores cupiditate distinctio nam animi perferendis consectetur hic
						modi veniam consequatur sint nulla. Omnis itaque eum magni ratione nesciunt voluptate dolorem
						nostrum. Voluptatibus sapiente, facere repudiandae ratione rem eaque accusantium omnis non
						consequatur incidunt. Culpa, sequi! Blanditiis, atque at ad magni odio aperiam ea ullam
						eligendi optio, officia tempora deleniti dignissimos non!
					</h1>
				</div>
				<div
					className="w-full bg-inherit absolute bottom-0 left-0 p-2 cursor-pointer font-semibold"
					onClick={() => {
						setExpandDescription(!expandDescription);
					}}
				>
					{expandDescription ? "show less" : "... more"}
				</div>
			</div>
		</>
	);
};

export default Description;
