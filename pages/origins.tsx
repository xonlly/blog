import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../components/container";
import PostBody from "../components/post-body";
import Header from "../components/header";
import PostHeader from "../components/post-header";
import Layout from "../components/layout";
import { getPostBySlug, getAllPosts } from "../lib/api";
import PostTitle from "../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import markdownToHtml from "../lib/markdownToHtml";
import type PostType from "../interfaces/post";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  const title = `À propos | InnoMag.`;

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>Les origines | InnoMag.</title>
                <meta
                  name="description"
                  content={`Innomag. le magazine en ligne dédié à l'innovation, vous invite à explorer les avancées technologiques et les idées révolutionnaires qui façonnent notre futur. Rejoignez-nous pour un voyage captivant à travers les dernières découvertes et tendances !`}
                />
              </Head>
              <PostHeader
                title={"Les origines d'InnoMag."}
                coverImage={"/assets/blog/inno.jpg"}
                date={"2023-05-08T05:35:07.322Z"}
                author={{
                  name: "Marvin SANT",
                  picture: "/assets/blog/authors/marv.jpeg",
                }}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const content = await markdownToHtml(
    `Bienvenue sur InnoMag, le magazine en ligne qui met en lumière les innovations qui transforment notre monde. Laissez-nous vous présenter notre histoire et notre mission pour mieux comprendre ce qui nous anime.

## Notre histoire

InnoMag a vu le jour en 2023, fondé par un groupe de passionnés par la technologie et l'innovation. Lassés de devoir chercher des informations sur les dernières avancées technologiques dans diverses sources éparses, ils ont décidé de créer un espace unique où les esprits curieux pourraient se réunir pour explorer les nouveautés et les tendances du monde de l'innovation.

InnoMag a grandi et évolué pour devenir une référence dans le domaine de l'innovation. Aujourd'hui, notre équipe est composée d'experts, et de passionnés qui travaillent sans relâche pour vous offrir un contenu de qualité, toujours à la pointe de l'actualité.

## Notre mission

La mission d'InnoMag est simple : inspirer, informer et éduquer nos lecteurs sur les innovations qui façonnent notre futur. Nous croyons fermement que la connaissance et la compréhension des dernières avancées technologiques et scientifiques sont essentielles pour s'adapter et prospérer dans notre monde en constante évolution.

Pour atteindre cet objectif, nous nous engageons à :

- Proposer des articles de qualité, rédigés par des experts et des passionnés du domaine.
- Couvrir un large éventail de sujets, allant des dernières avancées scientifiques aux innovations technologiques, en passant par les projets entrepreneuriaux les plus prometteurs.
- Maintenir un esprit critique et indépendant dans notre couverture médiatique.
- Favoriser un espace d'échange et de discussion pour que nos lecteurs puissent partager leurs idées et leurs connaissances.

## Rejoignez-nous

Si vous êtes passionné par l'innovation et que vous souhaitez contribuer à InnoMag, nous serions ravis de vous accueillir dans notre équipe. N'hésitez pas à nous contacter sur contact@innomag.fr pour discuter des opportunités de collaboration, que vous soyez un rédacteur, un expert, un photographe ou un simple passionné désireux de partager son point de vue.

Nous vous remercions de votre soutien et nous espérons que vous apprécierez votre séjour sur InnoMag, là où les idées brillantes prennent vie.
`
  );

  return {
    props: {
      post: {
        content,
      },
    },
  };
}
