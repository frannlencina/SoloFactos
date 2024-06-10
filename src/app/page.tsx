import PostCard from "@/components/PostCard";
import FirstNotLogged from "@/components/sections/FirstNotLogged";

export default function Home() {
  // Checkeo de si está logeado la primera vez que entra a la página
  const isLogged = false;

  const fakeData =
    [
      {
        nickname: "Frannlencina",
        username: "@frannchus",
        avatar: "https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png",
        post: "las milanesas de pollo son mejor que las de carne"
      },
      {
        nickname: "Santiiy",
        username: "@santiglu",
        avatar: "https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png",
        post: "las milanesas de pollo son mejor que las de carne"
      },
      {
        nickname: "Tomes",
        username: "@tomingi",
        avatar: "https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png",
        post: "el helado de menta es y será el mejor"
      },
      {
        nickname: "Frannlencina",
        username: "@frannchus",
        avatar: "https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png",
        post: "cada dia confirmo que todas son iguales"
      },
      {
        nickname: "Santiiy",
        username: "@santiglu",
        avatar: "https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png",
        post: "las milanesas de pollo son mejor que las de carne"
      },
      {
        nickname: "Tomes",
        username: "@tomingi",
        avatar: "https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png",
        post: "el helado de menta es y será el mejor"
      },
      {
        nickname: "Frannlencina",
        username: "@frannchus",
        avatar: "https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png",
        post: "cada dia confirmo que todas son iguales"
      },
      {
        nickname: "Santiiy",
        username: "@santiglu",
        avatar: "https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png",
        post: "las milanesas de pollo son mejor que las de carne"
      },
      {
        nickname: "Tomes",
        username: "@tomingi",
        avatar: "https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png",
        post: "el helado de menta es y será el mejor"
      },
      {
        nickname: "Frannlencina",
        username: "@frannchus",
        avatar: "https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png",

        post: "las milanesas de pollo son mejor que las de carne"
      },
      {
        nickname: "Santiiy",
        username: "@santiglu",
        avatar: "https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png",
        post: "cada dia confirmo que todas son iguales"
      },
      {
        nickname: "Tomes",
        username: "@tomingi",
        avatar: "https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png",
        post: "el helado de menta es y será el mejor"
      }
    ]

  return (
    <main className="flex flex-col justify-center items-center max-w-5xl min-h-screen mx-auto">
      {isLogged ? (
        <div className="flex flex-col gap-16 my-32">
          {
            fakeData.map((user, index) => (
              <div key={index}>
                <PostCard username={user.username} nickname={user.nickname} post={user.post} avatar={user.avatar} />
              </div>
            ))
          }
        </div>
      ) : (
        <section>
          <FirstNotLogged />
          <div className="flex flex-col gap-16 my-32">
            {
              fakeData.map((user, index) => (
                <div key={index}>
                  <PostCard username={user.username} nickname={user.nickname} post={user.post} avatar={user.avatar} />
                </div>
              ))
            }
          </div>
        </section>
      )}
    </main>
  )
}