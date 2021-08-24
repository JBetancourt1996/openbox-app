<template>
  <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
    <!-- header -->
    <header class="bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900">
      <nav class="flex items-center py-2 md:mx-20 mx-5 md:flex-wrap gap-4">
        <div class="animate-pulse">
          <img src="../../images/logo-open.png" width="100" alt="" />
        </div>
        <div
          class="
            hidden
            xs::flex
            flex-wrap
            text-white
            border border-white
            py-1
            px-2
            rounded-md
            leading-none
          "
        >
          <a href="">Tailwind UI Ecommerce is availeble now -> </a>
        </div>
        <ul class="text-white hidden md:flex flex-1 justify-end gap-4">
          <li class="">Documentation</li>
          <li class="">Pricing & FAQ</li>
          <li class="">Sign in -></li>
        </ul>
        <div class="flex md:hidden flex-1 justify-end">
          <div id="app">
            <nav class="main-nav">
              <Burger class="animate-bounce">
                <img
                  src="../../images/burger.png"
                  height="32"
                  width="32"
                  alt=""
              /></Burger>
            </nav>

            <Sidebar class="">
              <ul class="text-white font-semibold space-y-4">
                <li>
                  <a href="#home">Documentation</a>
                </li>
                <li>
                  <a href="#about">Pricing & FAQ</a>
                </li>
                <li>
                  <a href="#contact">Sign in -></a>
                </li>
              </ul>
            </Sidebar>
          </div>
        </div>
      </nav>
    </header>
    <div class="md:inline-flex md:mx-auto">
      <div class="md:inline-flex py-4 md:px-18 px-4">
        <div class="flex-grow">
          <div class="text-start mt-8">
            <p
              class="
                md:text-
                text-white text-xs
                font-semibold
                tracking-wide
                uppercase
                mb-4
                text-whit
              "
            >
              By the makers of Tailwind CSS
            </p>
            <h1
              class="
                order-1
                text-3xl
                sm:text-5xl
                sm:leading-none
                font-extrabold
                tracking-tight
                text-white
                mb-4
              "
            >
              <span class="text-blue-400">Beautiful UI components,</span>
              crafted with Tailwind CSS
            </h1>
            <div
              class="
                flex flex-wrap
                md:space-x-16
                space-x-6
                md:mt-8
                text-white
                font-medium
                justify-start
              "
            >
              <span class=""
                ><img
                  src="../../images/html.png"
                  width="32"
                  height="32"
                  alt=""
                />Html</span
              >

              <span class=""
                ><img
                  src="../../images/main-avatar.png"
                  width="32"
                  height="32"
                  alt=""
                />
                React</span
              >

              <span class=""
                ><img
                  src="../../images/vue.png"
                  width="32"
                  height="32"
                  alt=""
                />vue</span
              >
            </div>
            <h1
              class="
                text-justify text-sm text-white
                mt-4
                leading-relaxed
                order-2
              "
            >
              Over 400+ professionally designed, fully responsive, expertly
              crafted component examples you can drop into your Tailwind
              projects and customize to your heart’s content. Get started by
              checking out our free preview components, or browsing all of the
              examples in the categories you're most curious about.
            </h1>
          </div>
          <div class="mt-4 md:inline-flex text-center space-x-8">
            <a href="#">
              <div
                class="
                  py-3
                  px-4
                  border
                  leading-none
                  font-semibold
                  bg-white
                  hover:bg-gray-300
                  rounded-md
                "
              >
                Try out
              </div>
            </a>
            <a href="#">
              <div
                class="
                  py-3
                  px-4
                  border
                  leading-none
                  border-transparent
                  text-white
                  font-semibold
                  bg-gray-900
                  hover:bg-gray-700
                  rounded-md
                "
              >
                Browse everything
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center md:w-5/12 mt-8 relative">
        <div class="flex-wrap">
          <div class="h-32 w-32 mx-auto">
            <img src="../../images/main-avatar.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        bg-transparent
        md:inline-flex
        md:justify-between
        md:px-18
        md:space-y-0
        px-4
        md:space-x-6
        text-white
        sa:space-y-6
        mt-4
        mb-32
      "
    >
      <div class="flex-wrap text-start">
        <h2 class="font-semibold text-white mb-2">400+ Examples</h2>
        <p class="leading-normal">
          Beautifully designed, expertly crafted components that follow all
          accessibility best practices and are easy to customize.
        </p>
      </div>

      <div class="flex-wrap text-start">
        <h2 class="font-semibold text-white mb-2">React, Vue, and HTML</h2>
        <p class="leading-normal">
          Accessible, interactive examples for React and Vue powered by Headless
          UI, plus vanilla HTML if you’d rather write any necessary JS yourself.
        </p>
      </div>
      <div class="flex-wrap text-start">
        <h2 class="font-semibold text-white mb-2">Fully Responsive</h2>
        <p class="leading-normal">
          Every example is fully responsive and carefully designed and
          implemented to look great at any screen size.
        </p>
      </div>
    </div>
    <div class="sticky top-0">
      <nav class="bg-white w-full py-2">
        <ul
          class="
            flex
            space-x-10
            text-xs
            md:text-sm
            md:space-x-20
            px-4
            md:px-18
            flex-wrap
          "
        >
          <li>Marketing</li>
          <li>Aplication UI</li>
          <li>
            Ecommerce &nbsp; &nbsp; &nbsp;<a
              href=""
              class="hidden md:inline-flex text-blue-600"
            >
              New</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
      pariatur delectus repellendus dolorem perspiciatis, aliquid ipsam a,
      officia ut facere debitis ad quibusdam maiores omnis et laboriosam tempore
      perferendis! Soluta. Nemo corporis quibusdam doloribus iste, delectus ut
      obcaecati repellat esse quas modi sit similique maxime placeat animi.
      Atque optio beatae obcaecati cumque saepe laborum incidunt architecto
      deserunt ea? Accusamus, possimus! Libero maxime minima dignissimos. Maxime
      quam beatae assumenda natus. Dignissimos ratione magnam voluptatum
      expedita, tenetur sit officiis ab unde omnis quis optio? Voluptas, quas
      earum praesentium obcaecati rerum libero voluptates. Fugit libero soluta
      officia! Omnis impedit ipsam ad vel molestias consequatur dolores,
      repellendus alias nulla beatae molestiae qui inventore commodi aliquam nam
      eos iusto cupiditate repudiandae deleniti? Autem, ut sit! Consequuntur
      dignissimos quos voluptate ea eius neque fuga minus fugit eveniet odit
      delectus aliquam voluptatum ipsa similique porro ipsum in minima nostrum
      sit hic, earum quo, consectetur quasi. Voluptatum, optio! Eligendi quas ut
      commodi fuga perspiciatis excepturi pariatur molestias officiis facere,
      nisi quisquam nihil? Eos maxime ratione omnis quibusdam eum atque,
      eligendi, eius, illo quis eaque doloremque. Fuga, molestiae vitae! Soluta
      labore odio iste consequuntur quis quasi officia animi voluptas cum
      aspernatur modi praesentium corporis debitis voluptatibus quam in, aperiam
      sequi quos, deserunt perferendis. Illum odit distinctio dicta corporis
      doloribus. Voluptatum, similique et omnis repudiandae itaque magnam eum
      deserunt mollitia natus error? Dolores repellendus ipsam delectus minima
      voluptatibus error quis, ex facilis quasi laborum est, magni dolorem
      eveniet sit odit! Tempore velit inventore non officia facilis nesciunt
      officiis quod commodi. Nesciunt adipisci itaque veritatis fuga eligendi
      ipsa dolore. Beatae quae accusantium repellat dolorum architecto omnis
      nostrum dignissimos officia perspiciatis aspernatur. Ullam cum doloribus
      vero! Enim dignissimos odit unde suscipit dolore velit ad facilis quo
      totam minus. Inventore aut ex possimus, ducimus est optio sit? Unde
      doloribus vero cum tempora quae! Voluptatem deleniti natus sequi rem amet
      illum saepe. Deserunt delectus quas autem error aspernatur hic numquam
      reprehenderit atque. Consequuntur esse aperiam quam sapiente, soluta
      obcaecati id! Accusantium dolor amet temporibus? Nulla hic dolorum, eius
      id similique, dignissimos fugiat debitis laudantium placeat deserunt
      libero reprehenderit possimus quis. Doloremque laborum fuga, tempora,
      nostrum, officiis nemo quaerat officia laboriosam soluta magni molestias
      optio? Animi debitis quis eos, obcaecati cumque nisi perspiciatis velit
      dolore sunt dolorum, autem soluta, natus vitae culpa illo exercitationem.
      Veniam provident ab nobis iusto pariatur qui amet est distinctio ratione?
      Laboriosam accusantium veritatis tempora quod temporibus tenetur corporis
      soluta expedita facere id. Nemo voluptas eaque neque magnam quisquam vero,
      sit, tempora mollitia blanditiis, officiis culpa itaque dolorem quibusdam
      quas rem. Aspernatur voluptatum quia magni ab non facere ea obcaecati eum
      aliquam asperiores delectus nesciunt, esse, deserunt provident maiores
      exercitationem est qui labore consequatur at culpa. Excepturi omnis sunt
      quidem dicta. Natus provident iusto quibusdam repellat fugit, nam
      architecto neque. Facilis architecto consectetur voluptate, ab dignissimos
      eos voluptatibus sequi illum excepturi! Nobis corrupti eum sunt quaerat
      sit rerum eligendi facere. Quasi! Fugiat perferendis ullam nisi. Expedita
      non magni fugit similique ex harum tempora corrupti porro voluptate
      aliquam officia totam voluptatibus, nihil natus mollitia consequuntur?
      Tempore officiis doloribus natus? Maxime, porro doloribus. Non, dolorum?
      Deleniti unde, sed aperiam voluptatibus excepturi ducimus iure voluptate.
      Blanditiis dignissimos debitis iure quo repellat aperiam voluptates quasi
      ratione cum cumque fugiat sunt, labore dolorem illo molestiae quas. Quam,
      nemo at labore suscipit quasi praesentium in itaque optio quod molestiae
      nulla, perferendis maiores natus aut distinctio ea aliquam ipsa quaerat
      corrupti error ipsum eligendi. Eos minima eaque perferendis. Voluptatem
      alias iure, debitis nam, quidem nihil quae modi dolor voluptates in
      reprehenderit. Saepe perspiciatis reiciendis rem doloribus corrupti
      explicabo modi, placeat autem similique cupiditate tenetur, voluptatem
      quas eveniet a? Deleniti natus nihil ea quisquam fuga rerum necessitatibus
      ab odit expedita illum, dignissimos doloremque incidunt quae delectus
      consequuntur optio tempora quod in blanditiis nam eveniet laudantium
      sapiente a architecto. Natus? Incidunt sed est mollitia cupiditate ea
      voluptatem facilis illo sequi. Porro deleniti quod officia voluptas,
      deserunt illo est sit soluta omnis inventore! Sequi aperiam, praesentium
      totam tenetur autem explicabo quas! Autem voluptatibus repellat sit
      corrupti id incidunt, nostrum quam itaque iure doloribus a molestiae vel
      porro tempore! Atque, ad? Obcaecati aperiam quia assumenda fugit odio.
      Error quis consequatur reiciendis numquam? Distinctio voluptates fugit vel
      quaerat culpa iste consectetur iure possimus magni, inventore soluta ad
      nemo eaque facere commodi incidunt saepe neque, porro, debitis sed. Quae
      accusamus velit dolore doloribus quos? Fugiat laudantium minus at, modi
      vitae qui veniam culpa aliquam rerum id quidem commodi corrupti expedita
      aliquid odio, quo voluptatum laboriosam nemo! Inventore et voluptatem
      voluptates sed, cupiditate deserunt assumenda. Ipsam architecto minus
      quidem maxime magni eveniet tenetur, at dolorem officiis laboriosam
      expedita suscipit velit neque fugiat assumenda! Minima perferendis ipsa
      animi possimus ipsum velit molestiae quam temporibus quis officia? Alias
      eveniet consectetur modi tempore temporibus sit corrupti, expedita rem
      mollitia ipsum, quam beatae, unde fuga. Placeat, eos quia quae, cum
      possimus sint delectus quaerat itaque quasi, adipisci quam nesciunt.
      Recusandae aspernatur eveniet enim, voluptates quo molestiae illo
      asperiores optio laborum! Aperiam et excepturi molestias, non culpa ea?
      Unde magnam voluptatibus rerum neque minus quae voluptate aspernatur eaque
      impedit omnis! Voluptas exercitationem dignissimos magnam repellendus enim
      nihil eum perspiciatis est? Eligendi veritatis assumenda sunt consequuntur
      quod dolorum cumque esse inventore adipisci modi! Delectus totam mollitia
      asperiores placeat, non accusamus. Est? A libero facilis totam dolorum ea
      ipsum culpa molestias iusto omnis reprehenderit accusantium accusamus,
      voluptatum distinctio quis quisquam itaque in cum porro! Veniam fugiat
      reiciendis facere vero debitis? Enim, minima.
    </div>
  </div>
</template>

<script>
import Burger from "../../components/Menu/Burger.vue";
import Sidebar from "../../components/Menu/Sidebar.vue";
export default {
  name: "app",
  components: {
    Burger,
    Sidebar,
  },
  data() {
    return {
      tema1: [
        {
          id: 1,
          text: "Hero Sections",
          text1: "9 Components",
        },
      ],
    };
  },
};
</script>