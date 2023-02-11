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
            :resetDialog="resetDialog"
            @backHome="backHomeOnClick"
            @addAccountOnClick="addAccountOnClick" />

        <v-alert
            class="AddAccountDialogAlert"
            v-show="alertInfo.show"
            :type="alertInfo.type"
            :title="alertInfo.title"
            :text="alertInfo.text"
        ></v-alert>
    </div>
</template>
<style scoped>
    .account-data-table {
        margin-top: 30px;
    }
    .all-account-row {
        margin-top: 20px;
    }
    .AddAccountDialogAlert {
        width: 60%;
        margin: 20px auto;
    }
</style>

<script>

import AddAccountDialog from "./module/AddAccountDialog";

const axios = require('axios');
const settings = require('electron-settings')

export default {
    name: "HomeView",
    components: {
        AddAccountDialog,
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
            passphrasesList: [],

            alertInfo: {
                show: false,
                type: "",
                title: "",
                text: ""
            },
            resetDialog: null,
        };
    },
    methods: {
        async init() {
            var accountRes = await this.getAccoutData("1207875391197754919");
            if (accountRes.value) {
                this.accountData = accountRes.value
            }

            this.passphrasesList = await settings.get("passphrases.list")
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
        async addAccountOnClick(passphrases) {

            var passphrasesList = await settings.get("passphrases.list")
            console.log(passphrasesList)

            // local passphrasesList is undefind
            if (!passphrasesList) {
                passphrasesList = [];
            }

            // if content is duplicated
            if (!passphrasesList.includes(passphrases)) {

                passphrasesList.push(passphrases)
                await settings.set("passphrases", {
                    list: passphrasesList
                })

                this.alertInfo = {
                    show: true,
                    type: "success",
                    title: "Success",
                    text: "Add Passphrases Success, Click Back To Go Back To the Home Or Continue To Add"
                }
                this.resetDialog = new Date().getTime()
                return
            }

            this.alertInfo = {
                show: true,
                type: "warning",
                title: "Failed",
                text: "Please Check Your Passphrases Then Add Again"
            }
        },
        backHomeOnClick() {
            this.addAccountDialog = false;
            this.alertInfo.show = false;
        }
    },
    mounted: function() {
        this.init()
    }
};
</script>