<template>
  <b-container fluid class="container-modelo">
    <b-row>
      <b-col v-for="(item) in items" :key="item.id" class="col-modelo">
        <h5>{{item.titulo}}</h5>
        <br>
        <b-img :ref="'item' + item.id" @click="mudarCss(item,$event)" class="zoom" width="200" height="200" :src="item.url" alt="Thumbnail" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { barramento } from "../../main";
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("Documentos", ["modeloImagem"])
  },
  data() {
    return {
      items: [
        {
          id: 1,
          titulo: "Contrato",
          url:
            "https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/artigos/images/6330-5-contrato-de-locacao-frente1451868296.jpg",
          modelo: `<h1 class="ql-align-center"><span class="ql-font-serif" style="color: rgb(255, 255, 255); background-color: rgb(240, 102, 102);"> I am {!nome} 1! </span></h1><p><br></p><p><span class="ql-font-serif">{!email} Can a man still be brave if he's afraid? That is the only time a man can be brave. </span></p><p><br></p><p><strong class="ql-size-large ql-font-serif">Courage and folly is </strong><strong class="ql-size-large ql-font-serif" style="color: rgb(230, 0, 0);">always</strong><strong class="ql-size-large ql-font-serif"> just a fine line.</strong></p><p><br></p><p><u class="ql-font-serif">There is only one God, and his name is Death. And there is only one thing we say to Death: "Not today."</u></p><p><br></p><p><em class="ql-font-serif">Fear cuts deeper than swords.</em></p><p><br></p><pre class="ql-syntax" spellcheck="false">const a = 10; const editorOption = { highlight: text =&gt; hljs.highlightAuto(text).value }; </pre><p><br></p><p><span class="ql-font-serif">Every flight begins with a fall.</span></p><p><br></p><p><a href="https://surmon.me/" target="_blank" class="ql-size-small ql-font-serif" style="color: rgb(230, 0, 0);"><u>A ruler who hides behind paid executioners soon forgets what death is. </u></a></p><p><br></p><p><br></p><p><span class="ql-font-serif">Hear my words, and bear witness to my vow. Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against the cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night’s Watch, for this night and all the nights to come.</span></p><p><br></p><p><span class="ql-font-serif">We are born to suffer, to suffer can make us strong.</span></p><p><br></p><p><span class="ql-font-serif">The things we love destroy us every time.</span></p>`
        },
        {
          id: 2,
          titulo: "Curriculo",
          url:
            "https://omextemplates.content.office.net/support/templates/pt-br/lw00002101.png",
          modelo: `<h1 class="ql-align-center"> <span class="ql-font-serif"><span class="ql-cursor">﻿</span>I am Example 2!</span></span> </h1> <p><br></p> <p><span class="ql-font-serif">Whenever you play the game of thrones, you either win or die. There is no middle ground.</span></p> <p><br></p> <p><strong class="ql-font-serif">Some war against sword and spear to win, and the others the crow and the paper to win.</strong></p> <p><br></p> <p><u class="ql-font-serif">Dead history is write in ink, the living sort in blood.</u></p> <p><br></p> <p><em class="ql-font-serif">They're only numbers. Numbers on paper. Once you understand that, it's easy to make them behave.</em></p> <p><br></p> <p><span class="ql-font-serif">Every time we deal with an enemy, we create two more.</span></p> <p><br></p> <p><span class="ql-font-serif">So the king has decreed. The small council consents.</span></p> <p><br></p> <p><span class="ql-font-serif">Chaos not is a pit, chaos is a ladder.</span></p> <p><br></p> <p><span class="ql-font-serif">A chain needs all sorts of metals, and a land needs all sorts of people.</span></p> <p><br></p> <p><span class="ql-font-serif">When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.</p>`
        },
        {
          id: 3,
          titulo: "Prestação de Serviços",
          url:
            "https://imgv2-1-f.scribdassets.com/img/document/24908462/original/415ef6b7cd/1528210403?v=1",
          modelo: `<h1 class="ql-align-center"> <span class="ql-font-serif"><span class="ql-cursor">﻿</span>I am Example 3!</span></span> </h1> <p><br></p> <p><strong class="ql-font-serif">Whenever you play the game of thrones, you either win or die. There is no middle ground.</strong></p> <p><br></p> <p><u class="ql-font-serif">Some war against sword and spear to win, and the others the crow and the paper to win.</u></p> <p><br></p> <p><em class="ql-font-serif">Dead history is write in ink, the living sort in blood.</em></p> <p><br></p> <p><span class="ql-font-serif" style="color: rgb(0, 102, 204);">They're only numbers. Numbers on paper. Once you understand that, it's easy to make them behave.</span></p> <p><br></p> <p><span class="ql-font-serif">Every time we deal with an enemy, we create two more.</span></p> <p><br></p> <p><span class="ql-font-serif">So the king has decreed. The small council consents.</span></p> <p><br></p> <p><span class="ql-font-serif">Chaos not is a pit, chaos is a ladder.</span></p> <p><br></p> <p><span class="ql-font-serif">A chain needs all sorts of metals, and a land needs all sorts of people.</span></p> <p><br></p> <p><span class="ql-font-serif">When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.</p>`
        },
        {
          id: 4,
          titulo: "Prestação de Serviços",
          url:
            "https://imgv2-1-f.scribdassets.com/img/document/24908462/original/415ef6b7cd/1528210403?v=1"
        }
      ],
      parceiro: {},
      tabInicio: 0,
      finishButton: this.finishButtonText
    };
  },
  methods: {
    mudarCss(item, e) {
      this.$store.state.Documentos.modelo = item;
      this.$store.state.Documentos.modeloDocumento = item.modelo;
      let modelo = this.$refs["item" + item.id][0];
      if (this.modeloImagem != "") {
        this.$toggleClass(
          this.$store.state.Documentos.modeloImagem,
          "toggle-modelo"
        );
      }
      this.$toggleClass(modelo, "toggle-modelo");
      this.$store.state.Documentos.modeloImagem = this.$refs[
        "item" + item.id
      ][0];
    }
  }
};
</script>
<style scoped >
.erro {
  color: red;
}

.btn .fa-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}
.btn .fa-icon:last-child {
  margin-right: 0;
}
.form-group {
  margin-bottom: 0px !important;
}
.vue-form-wizard {
  padding-bottom: 0px !important;
}
.zoom:hover {
  opacity: 0.4;
  transform: scale(1.1);
}
.zoom {
  cursor: pointer;
  transition: transform 0.2s; /* Animation */
}
.toggle-modelo {
  opacity: 0.4;
  transform: scale(1.1);
  border: 2px solid green;
  border-radius: 10px;
}
.container-modelo {
  margin-top: 1%;
}
.col-modelo {
  margin-bottom: 6%;
}
</style>
