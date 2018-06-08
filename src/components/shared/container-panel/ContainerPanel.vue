<template>
    <b-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl" :class="classProp" id="container-panel">
        <div class="container-panel-padding">
            <div class="container-panel-margin-titulo" >
                <!-- <h4 class="container-panel-titulo" >
                    <icon class="container-panel-icon-titulo" :name="icone" scale="1.6"></icon> {{titulo}}
                </h4> -->
            </div>
            <b-row>
                <slot></slot>
            </b-row>
        </div>
    </b-col>
</template>

<script>

export default {
    props: {
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
        },
        classProp:{
            type: String,
            required: false
        }
    }
}
</script>

<style  scoped>
.container-panel {
    padding: 15px 6px;
    padding-top: 0;
    /* background-color: #f4f3ef; */
    background-color: #F7F7F7;
}
.container-panel-titulo{
    padding-left:8px;
}
.container-panel-icon-titulo{
    color: #445d77;
}
/* .container-panel-padding{
    // padding:0 5px 0 5px;
} */
.container-panel-margin-titulo{
    margin-bottom:15px;
}

</style>