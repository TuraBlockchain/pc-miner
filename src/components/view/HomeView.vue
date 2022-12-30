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
                            <v-card-title class="profileSubTitle">Account ID: <span>{{ accountData.accountRS }}</span><v-icon icon="mdi-content-copy" class="copyIcon"></v-icon></v-card-title>
                            <v-card-title class="profileSubTitle">Numeric ID: <span>{{ accountData.account }}</span> <v-icon icon="mdi-content-copy" class="copyIcon"></v-icon></v-card-title>
                        </v-card-item>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="4">
                    <v-card class="homeCard" height="200">
                        <v-card-item>
                            <v-card-title>Current Balance</v-card-title>
                        </v-card-item>
                        <v-card-text class="cardNumBox">
                            <span class="cardNumInteger">{{ accountData.balanceNQT }}</span>
                            <span class="cardNumDecimal"></span>
                        </v-card-text>
                    </v-card>
                </v-col>


                <v-col cols="12" sm="4">
                    <v-card class="homeCard" height="200">
                        <v-card-item>
                            <v-card-title>Committed Balance</v-card-title>
                        </v-card-item>
                        <v-card-text class="cardNumBox">
                            <span class="cardNumInteger">{{ accountData.committedBalanceNQT }}</span>
                            <span class="cardNumDecimal"></span>
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

const axios = require('axios');

export default {
    name: "HomeView",
    components: {
    },
    data() {
        return {
            accountData: {
                "accountRS": "",
                "account": "",
                "balanceNQT": "",
                "committedBalanceNQT": ""
            },

        };
    },
    methods: {
        async init() {
            var accountRes = await this.getAccoutData("1207875391197754919");
            if (accountRes.value) {
                this.accountData = accountRes.value
            }
        },
        getAccoutData(numID) {
            return new Promise((resolve)=> {
                axios.get("/apis/burst?requestType=getAccount&account=" + numID + "&getCommittedAmount=true&_=1671952920334").then(res => {
                    if (res.data) {
                        resolve({value: res.data});
                    } else {
                        resolve({value: ""});
                    }
                })
                .catch(function (error) {
                    console.log(error)
                    resolve({value: ""})
                });
            })
        },
    },
    mounted: function() {
        this.init();
    }
};
</script>