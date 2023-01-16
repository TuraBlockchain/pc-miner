<template>
    <v-container class="view-container">

        <v-row class="card-row">

            <v-card class="login-card" width="500" height="600">

                <v-card-text class="login-title">
                    <div>PETH-ETH3</div>
                    <p class="text-h4 text--primary">Login</p>
                </v-card-text>

                <v-text-field
                    v-model="passphrasesInputValue"
                    class="passphrases-input"
                    label="Passphrases"
                    required
                ></v-text-field>

                <v-btn
                    class="add-account-btn"
                    size="large"
                    type="submit"
                    variant="elevated"
                    @click="this.$emit('addAccountOnClick', this.passphrasesInputValue)">
                    Add Account
                </v-btn>
                <br/>
                <v-btn
                    class="create-btn"
                    variant="text">
                    Create an account
                </v-btn>

                <v-card-actions>
                    <v-btn @click="this.$emit('backHome')" variant="text" class="back-btn">BACK</v-btn>
                </v-card-actions>
            </v-card>
        </v-row>

    </v-container>
</template>

<style scoped>
.card-row {
    margin-top: 50px;
}

.login-card {
    text-align: center;
    margin: 0 auto;
}
.passphrases-input {
    width: 80%;
    margin: 100px auto 0 auto;
}
.back-btn {
    margin-top: 60px;
}
.add-account-btn {
    margin-top: 70px;
}
.login-title {
    margin-top: 50px;
}
.create-btn {
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
            passphrasesInputValue: "",
        }
    },
    methods: {
    },
    mounted: function () {
    }
}
</script>