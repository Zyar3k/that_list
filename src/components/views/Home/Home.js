import BookTile from "../../features/BookTile/BookTile";
import Sidebar from "../../features/Sidebar/Sidebar";

import "./Home.scss";

import { dbBooks } from "../../../dummyData";

const Home = () => {
  console.log(dbBooks);
  return (
    <>
      <Sidebar />
      <section className="home">
        {dbBooks.map((book) => (
          <BookTile key={book._id} book={book} />
        ))}
        {/* <p>Hello World</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          velit porro deserunt deleniti, hic itaque ex magni soluta expedita
          recusandae nulla neque placeat quasi libero quia voluptas optio natus
          vel perferendis unde sint odio accusantium ut molestias? Architecto,
          facere optio repellat, exercitationem quasi dolore delectus nostrum
          perferendis accusamus tempore fugit nobis in odit. Placeat, veniam
          illo architecto, officia nam eaque expedita soluta, ipsam labore quam
          quo deserunt! Reprehenderit non dicta harum iusto blanditiis quis eius
          ipsum delectus minus, architecto quibusdam est aliquid molestias
          doloribus quae beatae corporis possimus asperiores dolore! Vero,
          pariatur praesentium. Voluptatem ad impedit maxime a laboriosam qui!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          velit porro deserunt deleniti, hic itaque ex magni soluta expedita
          recusandae nulla neque placeat quasi libero quia voluptas optio natus
          vel perferendis unde sint odio accusantium ut molestias? Architecto,
          facere optio repellat, exercitationem quasi dolore delectus nostrum
          perferendis accusamus tempore fugit nobis in odit. Placeat, veniam
          illo architecto, officia nam eaque expedita soluta, ipsam labore quam
          quo deserunt! Reprehenderit non dicta harum iusto blanditiis quis eius
          ipsum delectus minus, architecto quibusdam est aliquid molestias
          doloribus quae beatae corporis possimus asperiores dolore! Vero,
          pariatur praesentium. Voluptatem ad impedit maxime a laboriosam qui!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          velit porro deserunt deleniti, hic itaque ex magni soluta expedita
          recusandae nulla neque placeat quasi libero quia voluptas optio natus
          vel perferendis unde sint odio accusantium ut molestias? Architecto,
          facere optio repellat, exercitationem quasi dolore delectus nostrum
          perferendis accusamus tempore fugit nobis in odit. Placeat, veniam
          illo architecto, officia nam eaque expedita soluta, ipsam labore quam
          quo deserunt! Reprehenderit non dicta harum iusto blanditiis quis eius
          ipsum delectus minus, architecto quibusdam est aliquid molestias
          doloribus quae beatae corporis possimus asperiores dolore! Vero,
          pariatur praesentium. Voluptatem ad impedit maxime a laboriosam qui!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          velit porro deserunt deleniti, hic itaque ex magni soluta expedita
          recusandae nulla neque placeat quasi libero quia voluptas optio natus
          vel perferendis unde sint odio accusantium ut molestias? Architecto,
          facere optio repellat, exercitationem quasi dolore delectus nostrum
          perferendis accusamus tempore fugit nobis in odit. Placeat, veniam
          illo architecto, officia nam eaque expedita soluta, ipsam labore quam
          quo deserunt! Reprehenderit non dicta harum iusto blanditiis quis eius
          ipsum delectus minus, architecto quibusdam est aliquid molestias
          doloribus quae beatae corporis possimus asperiores dolore! Vero,
          pariatur praesentium. Voluptatem ad impedit maxime a laboriosam qui!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          velit porro deserunt deleniti, hic itaque ex magni soluta expedita
          recusandae nulla neque placeat quasi libero quia voluptas optio natus
          vel perferendis unde sint odio accusantium ut molestias? Architecto,
          facere optio repellat, exercitationem quasi dolore delectus nostrum
          perferendis accusamus tempore fugit nobis in odit. Placeat, veniam
          illo architecto, officia nam eaque expedita soluta, ipsam labore quam
          quo deserunt! Reprehenderit non dicta harum iusto blanditiis quis eius
          ipsum delectus minus, architecto quibusdam est aliquid molestias
          doloribus quae beatae corporis possimus asperiores dolore! Vero,
          pariatur praesentium. Voluptatem ad impedit maxime a laboriosam qui!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          velit porro deserunt deleniti, hic itaque ex magni soluta expedita
          recusandae nulla neque placeat quasi libero quia voluptas optio natus
          vel perferendis unde sint odio accusantium ut molestias? Architecto,
          facere optio repellat, exercitationem quasi dolore delectus nostrum
          perferendis accusamus tempore fugit nobis in odit. Placeat, veniam
          illo architecto, officia nam eaque expedita soluta, ipsam labore quam
          quo deserunt! Reprehenderit non dicta harum iusto blanditiis quis eius
          ipsum delectus minus, architecto quibusdam est aliquid molestias
          doloribus quae beatae corporis possimus asperiores dolore! Vero,
          pariatur praesentium. Voluptatem ad impedit maxime a laboriosam qui!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          velit porro deserunt deleniti, hic itaque ex magni soluta expedita
          recusandae nulla neque placeat quasi libero quia voluptas optio natus
          vel perferendis unde sint odio accusantium ut molestias? Architecto,
          facere optio repellat, exercitationem quasi dolore delectus nostrum
          perferendis accusamus tempore fugit nobis in odit. Placeat, veniam
          illo architecto, officia nam eaque expedita soluta, ipsam labore quam
          quo deserunt! Reprehenderit non dicta harum iusto blanditiis quis eius
          ipsum delectus minus, architecto quibusdam est aliquid molestias
          doloribus quae beatae corporis possimus asperiores dolore! Vero,
          pariatur praesentium. Voluptatem ad impedit maxime a laboriosam qui!
        </p> */}
      </section>
    </>
  );
};

export default Home;
