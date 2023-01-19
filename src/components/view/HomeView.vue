<template>
    <div>
        <v-container class="view-container" v-if="!addAccountDialog">

            <v-row no-gutters class="all-account-row">
                <v-col cols="12" sm="2" style="padding-left: 15px;" v-show="accountDataList.length != 0"><span>Total - </span><span></span></v-col>
                <v-col cols="12" sm="8" style="padding-left: 15px;" v-show="accountDataList.length != 0"><span>Total Current Balance - </span><span></span></v-col>

                <v-col cols="12" sm="10" style="padding-left: 15px;" v-show="accountDataList.length == 0"><span>Click to Add Account</span><span></span></v-col>
                <v-col cols="12" sm="2" style="text-align:right"><v-btn variant="outlined" @click="addAccountDialog = true">Add Account</v-btn></v-col>
            </v-row>

            <v-table class="account-data-table">
                <thead>
                    <tr>
                        <th class="text-left">
                            Account ID
                        </th>
                        <th class="text-left">
                            Numeric ID
                        </th>
                        <th class="text-left">
                            Current Balance
                        </th>
                        <th class="text-left">
                            Committed Balance
                        </th>
                        <th class="text-left">
                        </th>
                    </tr>
                </thead>
                <tbody v-if="accountDataList.length == 0">
                    <tr><td>No Content</td></tr>
                </tbody>
                <tbody v-if="accountDataList.length != 0">
                    <tr v-for="account in accountDataList" :key="account.accountRS">
                        <td>{{ account.accountRS }}</td>
                        <td>{{ account.account }}</td>
                        <td>{{ account.balanceNQT }}</td>
                        <td>{{ account.committedBalanceNQT }}</td>
                        <td>
                            <span>Delete</span>
                            <span>Details</span>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-container>
        
        <!-- Use a component like home view to replace the dialog, 
            because vuetify's dialog will have a rendering error in electron, 
            the web version does not have this problem -->
        <AddAccountDialog 
            v-if="addAccountDialog"
            @backHome="addAccountDialog = false"
            @addAccountOnClick="addAccountOnClick" />
    </div>
</template>
<style scoped>
    .account-data-table {
        margin-top: 30px;
    }
    .all-account-row {
        margin-top: 20px;
    }
</style>

<script>

import AddAccountDialog from "./module/AddAccountDialog";

const axios = require('axios');

export default {
    name: "HomeView",
    components: {
    },
    data() {
        return {
            accountDataList: [],
            accountData: {
                "accountRS": "",
                "account": "",
                "balanceNQT": "",
                "committedBalanceNQT": ""
            },
            addAccountDialog: false,
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
        addAccountOnClick(passphrases) {
            console.log(passphrases)
        }
    },
    mounted: function() {

        db.writeData("123","123")

        this.init();
    }
};
</script>