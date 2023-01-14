<template>
    <v-container class="view-container">

        <v-row no-gutters class="dialogTitleRow">
            <v-btn @click="this.$emit('backHome')">BACK</v-btn>
        </v-row>
    </v-container>
</template>

<style scoped>
    .dialogTitleRow{
        margin-top: 20px;
    }
</style>

<script>
export default {
    name: "AddAccountDialog",
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
    },
    mounted: function () {
    }
}
</script>