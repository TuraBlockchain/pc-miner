<template>
    <div>
        <v-container class="bg-surface-variant test1">
            <v-row no-gutters>
                <v-col cols="12" sm="4">
                    <v-card class="homeCard" height="200">
                        <v-card-item>
                            <v-card-title>Profile</v-card-title>
                        </v-card-item>
                        <v-card-item>
                            <v-card-title class="profileSubTitle">Account ID: <span>TS-GFK9-AM6N-D5CG-3WTJ3</span><v-icon icon="mdi-content-copy" class="copyIcon"></v-icon></v-card-title>
                            <v-card-title class="profileSubTitle">Numeric ID: <span>1207875391197754919</span> <v-icon icon="mdi-content-copy" class="copyIcon"></v-icon></v-card-title>
                        </v-card-item>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="4">
                    <v-card class="homeCard" height="200">
                        <v-card-item>
                            <v-card-title>Current Balance</v-card-title>
                        </v-card-item>
                        <v-card-text class="cardNumBox">
                            <span class="cardNumInteger">12313</span>
                            <span class="cardNumDecimal">.3242</span>
                        </v-card-text>
                    </v-card>
                </v-col>


                <v-col cols="12" sm="4">
                    <v-card class="homeCard" height="200">
                        <v-card-item>
                            <v-card-title>Committed Balance</v-card-title>
                        </v-card-item>
                        <v-card-text class="cardNumBox">
                            <span class="cardNumInteger">12313</span>
                            <span class="cardNumDecimal">.3242</span>
                        </v-card-text>
                    </v-card>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>
<style scoped>
    .cardNumBox {
        margin-top: 50px;
        text-align:center
    }
    .cardNumInteger {
        font-size: 40px;
    }
    .cardNumDecimal {
        font-size: 20px;
    }
    .copyIcon {
        margin-top: 5px;
        float: right;
    }
    .copyIcon:hover {
        cursor: pointer;
    }
    .homeCard {
        height: 400;
        margin-right: 10%;
    }
    .profileSubTitle {
        font-size: 14px;
    }
    .test1 {
        max-width: 100% !important;
    }
</style>

<script>

export default {
    name: "HomeView",
    components: {
    },
    data() {
        return {
        };
    },
    methods: {
    },
    mounted: function() {
    }
};
</script>