<template>
    <b-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl" class=" painel-col">
        <div class="icons">
            <div class="painel-content">
                <b-collapse visible id="">
                    <slot></slot>
                </b-collapse>   
            </div>
        </div>
    </b-col>
</template>
<script>
export default {
    props: {
        idpainel: {
            type: String,
            required: false
        },
        titulo: {
            type: String,
            required: false
        },
        cols: {
            type: String,
            required: false
        },
        sm: {
            type: String,
            required: false
        },
        md: {
            type: String,
            required: false
        },
        lg: {
            type: String,
            required: false
        },
        xl: {
            type: String,
            required: false
        },
        icone: {
            type: String,
            required: false
        }

    },
    methods: {
        disparaAcao() {
            this.$emit('fecharPainel');
        }

    }

}
</script>
<style scoped>
.painel-col {
    margin-bottom: 14px;
}

.painel-content {
    border: 1px solid #E6E9ED;
    padding: 5px 15px;
}

.painel-border {

    padding-top: 20px;
}

.icons {
    background-color: #fff;
}

.icons>a {
    float: right;
    padding: 5px;
    cursor: pointer;
}

.icons>a:hover {
    background-color: #f3f3f3;
    opacity: 1;
}

.painel-icon {
    color: #C5C7CB;
}
.painel-icon-titulo{
    color: #445d77;
}
svg.fa-icon{
    vertical-align: middle;
}
</style>
