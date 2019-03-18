<template>
    <div class="mail container-fluid">
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-4">
                <ul class="list-group">
                    <li class="list-group-item header">
                        <img src="../../assets/images/design/send.png" class="header-image" alt="..."> Yuborilgan
                    </li>
                    <li class="list-group-item float-left dark">
                        <router-link class="sideRouter" to="/home">Nazorat bandlari</router-link>
                        <span class="number float-right pl-3">Nazoratda/Hammasi</span>
                    </li>
                  </ul>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-8">
                <div class="org-title"><h4>Filter</h4></div>
                <div class="filter">
                    <div class="row">
                        <div class="col-xl-9 col-lg-10 col-md-10 col-sm-10 col-10">
                            <div class="option-row">
                                <b-form-group>
                                    <b-form-radio-group v-model="selectedRadio" :options="optionsRadio" name="radioOptions" />
                                </b-form-group>
                            </div>
                        </div>
                    </div>
                        <b-row>
                            <b-col xl="4" class="my-1">
                                <b-form-group label-cols-xl="4" label-cols-sm="4" label="Sana: ..dan" class="mb-0">
                                    <b-input-group>
                                        <date-picker v-model="date" :config="options"></date-picker>
                                        <div class="input-group-prepend">
                                            <b-input-group-text>
                                                <img src="../../assets/images/design/date.png" alt="...">
                                            </b-input-group-text>
                                        </div>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col xl="4" class="my-1">
                                <b-form-group label-cols-xl="4"  label-cols-sm="4" label="..gacha" class="mb-0">
                                    <b-input-group>
                                        <date-picker v-model="date2" :config="options"></date-picker>
                                        <div class="input-group-prepend">
                                            <b-input-group-text>
                                                <img src="../../assets/images/design/date.png" alt="...">
                                            </b-input-group-text>
                                        </div>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col xl="3" class="my-1">
                                <b-form-group label-cols-xl="5"  label-cols-sm="4" label="Kirish №" class="mb-0">
                                    <b-input-group>
                                        <b-form-input v-model="filter" />
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col xl="4" class="my-1">
                                <b-form-group label-cols-xl="4" label-cols-sm="4" label="Sana: ..dan" class="mb-0">
                                    <b-input-group>
                                        <date-picker v-model="date" :config="options"></date-picker>
                                        <div class="input-group-prepend">
                                            <b-input-group-text>
                                                <img src="../../assets/images/design/date.png" alt="...">
                                            </b-input-group-text>
                                        </div>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col xl="4" class="my-1">
                                <b-form-group label-cols-xl="4"  label-cols-sm="4" label="..gacha" class="mb-0">
                                    <b-input-group>
                                        <date-picker v-model="date2" :config="options"></date-picker>
                                        <div class="input-group-prepend">
                                            <b-input-group-text>
                                                <img src="../../assets/images/design/date.png" alt="...">
                                            </b-input-group-text>
                                        </div>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col xl="3" class="my-1">
                                <b-form-group label-cols-xl="5"  label-cols-sm="4" label="Chiqish №" class="mb-0">
                                    <b-input-group>
                                        <b-form-input v-model="filter" />
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col xl="4" class="my-1">
                                <b-form-group label-cols-xl="4" label-cols-sm="4" label="Ijro muddati" class="mb-0">
                                    <b-input-group>
                                        <date-picker v-model="date" :config="options"></date-picker>
                                        <div class="input-group-prepend">
                                            <b-input-group-text>
                                                <img src="../../assets/images/design/date.png" alt="...">
                                            </b-input-group-text>
                                        </div>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col xl="4" class="my-1">
                                <b-form-group label-cols-xl="4"  label-cols-sm="4" label="..gacha" class="mb-0">
                                    <b-input-group>
                                        <date-picker v-model="date2" :config="options"></date-picker>
                                        <div class="input-group-prepend">
                                            <b-input-group-text>
                                                <img src="../../assets/images/design/date.png" alt="...">
                                            </b-input-group-text>
                                        </div>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col xl="3" class="my-1">
                                <b-form-group label-cols-xl="5"  label-cols-sm="4" label="Hujjat turi" class="mb-0">
                                    <b-form-select :options="pageOptions" size="sm" v-model="perPage" />
                                </b-form-group>
                            </b-col>
                            <b-col xl="4" class="my-1">
                                <b-form-group label-cols-xl="4"  label-cols-sm="4" label="Kimdan" class="mb-0">
                                    <b-form-select :options="pageOptions" size="sm" v-model="perPage" />
                                </b-form-group>
                            </b-col>
                            <b-col xl="4" class="my-1">
                                <b-form-group label-cols-xl="4"  label-cols-sm="4" label="Ijrochi" class="mb-0">
                                    <b-form-select :options="pageOptions" size="sm" v-model="filter" />
                                </b-form-group>
                            </b-col>


                        </b-row>


                </div>
            </div>
        </div>
            <div class="doc-container">
                <!--<div class="doc-container">-->
                    <div class="doc-title"><h4>Nazoratdagi hujjatlar</h4></div>

                        <!-- Main table element -->
                        <b-row>
                            <b-col md="6" class="my-1">
                                <b-pagination
                                        :total-rows="totalRows"
                                        :per-page="perPage"
                                        size="sm"
                                        v-model="currentPage"
                                        class="my-0"
                                />
                            </b-col>
                        </b-row>


                        <b-table bordered
                                show-empty
                                stacked="md"
                                :items="items"
                                :fields="fields"
                                :current-page="currentPage"
                                :per-page="perPage"
                                :filter="filter"
                                :sort-by.sync="sortBy"
                                :sort-desc.sync="sortDesc"
                                :sort-direction="sortDirection"
                                @filtered="onFiltered"
                        >

                        <template slot="masul" slot-scope="row">
                            <tr v-for="(value, key) in row.value" :key="key" class="b-custom-table-row">
                                {{value}}
                            </tr>
                        </template>
                        <template slot="ijroDate" slot-scope="row">
                            <tr v-for="(value, key) in row.value" :key="key" class="b-custom-table-row">
                                {{value}}
                            </tr>
                        </template>


                        <template slot="row-details" slot-scope="row">
                            <b-card>
                                <ul>
                                    <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                                </ul>
                            </b-card>
                        </template>
                        </b-table>

                <!--</div>-->
            </div>


        <router-view/>
    </div>

</template>
<script>
    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
    const items = [
            { number: 1, correspondent: 'Tashkent Region',typeOfDoc:'Bayon', regNumber:'25 exat',
                regDate: '12.02.2019', publishNumber: 'RK/12-15', publishDate:'10.02.2019', printedDate: '12.02.2019',
                content: 'Navroz celebration',
                masul: {person1: 'Shokirov', person2: 'Soliev', person3: "Achilov"},
                ijroDate: {date1: '12.03.2018', date2: 'none', date3: "12.01.2020"},
            },
            { number: 2, correspondent: 'vazirlar Mahkamasi',typeOfDoc:'Qaror', regNumber:'25 exat',
                regDate: '12.02.2019', publishNumber: 'RB/12-15', publishDate:'10.02.2019', printedDate: '12.02.2019',
                content: 'Navroz celebration'},
            { number: 3, correspondent: 'Tashkent Region',typeOfDoc:'Bayon', regNumber:'25 exat',
                regDate: '12.02.2019', publishNumber: 'RC/12-15', publishDate:'10.02.2019', printedDate: '12.02.2019',
                content: 'Navroz celebration'},
            { number: 4, correspondent: 'Tashkent Region',typeOfDoc:'Farmoish', regNumber:'25 exat',
                regDate: '12.02.2019', publishNumber: 'RK/12-15', publishDate:'10.02.2019', printedDate: '12.02.2019',
                content: 'Navroz celebration'},
            { number: 5, correspondent: 'vazirlar Mahkamasi',typeOfDoc:'Bayon', regNumber:'25 exat',
                regDate: '12.02.2019', publishNumber: 'RK/12-15', publishDate:'10.02.2019', printedDate: '12.02.2019',
                content: 'Navroz celebration'},
            { number: 6, correspondent: 'Tashkent Region',typeOfDoc:'Bayon', regNumber:'25 exat',
                regDate: '12.02.2019', publishNumber: 'RK/12-15', publishDate:'10.02.2019', printedDate: '12.02.2019',
                content: 'Navroz celebration'},



    ];

    export default {
        data () {
            return {
                selectedRadio: 'first',
                optionsRadio: [
                    { text: 'Barchasi', value: 'first' },
                    { text: 'Nazoratda', value: 'second' },
                    { text: 'Nazoratdan yechilgan', value: 'third' },
                    { text: 'Ijroga yuborilmagan', value: 'fourth'}
                ],
                date: new Date(''),
                date2: new Date(),
                options: {
                    format: 'DD.MM.YYYY',
                    useCurrent: false,
                },
                items: items,
                fields: [
                    { key: 'number', label: '№'},
                    { key: 'correspondent', label: 'Korrespondent', sortable: true, class: 'text-center' },
                    { key: 'typeOfDoc', label: 'Hujjat turi' },
                    { key: 'regNumber', label: 'Reg.№' },
                    { key: 'regDate', label: 'Reg.sanasi' },
                    { key: 'publishNumber', label: 'Chiqish №' },
                    { key: 'publishDate', label: 'Chiqish sanasi' },
                    { key: 'printedDate', label: 'Tarqatish sanasi' },
                    { key: 'content', label: 'Hujjat mazmuni' },
                    { key: 'resolution', label: 'Rezolyutsiya' },
                    { key: 'masul', label: 'Masul' },
                    { key: 'ijroDate', label: 'Ijro muddati' },
                    { key: 'ijroIlova', label: 'Ijro boyicha ilova' },
                    { key: 'bajDate', label: 'Bajarilgan muddati' },
                    { key: 'nazoratHolati', label: 'Nazorat holati' },
                    { key: 'nazoratchi', label: 'Nazoratchi' }

                ],
                currentPage: 1,
                perPage: 5,
                totalRows: items.length,
                pageOptions: ['Bayon', 'Qaror', 'Farmoish', 'Topshiriq'],
                sortBy: null,
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
                modalInfo: { title: '', content: '' }
            }

        },
        computed: {
            sortOptions() {
                // Create an options list from our fields
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        return { text: f.label, value: f.key }
                    })
            }
        },
        methods: {
            info(item, index, button) {
                this.modalInfo.title = `Row index: ${index}`
                this.modalInfo.content = JSON.stringify(item, null, 2)
                this.$root.$emit('bv::show::modal', 'modalInfo', button)
            },
            resetModal() {
                this.modalInfo.title = '';
                this.modalInfo.content = ''
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        },
        components: {
            datePicker

        }

    }



</script>
<style scoped>
    .dark{
        background: #4E4E4E;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: normal;
        color: #FFFFFF!important;
        padding: 10px;
    }
    .table{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: normal;

        color: #474747;
    }
    .table > thead > tr > th{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 13px!important;
        line-height: 11px;
        color: #FFFFFF;
    }
    .b-custom-table-row{
        width: 100%;
        margin-top: 0;
        height: auto;
        display: block;
    }

    .b-custom-table-hr{
        margin-left: -15%;
        width: 130%;
    }
    .mail{
        margin-top: 10px;
    }

    .org-title{
        height: 49px;
        background: #F4F4F4;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        padding-top: 1%;
    }
    .org-title h4{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 18px;
        text-align: center;
        color: #474747;
    }
    .doc-title{
        height: 49px;
        border-bottom: 1px solid #E7E7E7;
        box-sizing: border-box;
        padding: 1%;
    }
    .doc-title h4{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 18px;
        text-align: left;
        color: #474747;
    }
    .doc-container{
        margin-top: 1rem;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        display: block;
        height: auto;
        padding: 0;
    }
    .sideRouter{
        color: inherit;
    }
    .sideRouter:hover{
        text-decoration: none;
    }
    .header-image{
        margin-right: 10px;
        margin-bottom: 4px;
    }
    .list-group{
        min-width: 103%;
        margin-left: 0;
    }
    .list-group .header{
        font-family: 'Lato', sans-serif;
        background: #008CBA;

        box-sizing: border-box;
        border-radius: 3px 3px;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 15px;
        padding: 10px;
        color: #FFFFFF;
    }

    .list-group .active{
        background: rgba(0, 0, 0, 0.05);
        border-right: #dfdfdf;
        border-left: #dfdfdf;
        border-top-color: #f2f2f2;
        border-bottom-color: #f2f2f2;

    }
    .list-group-item{
        border-radius: 0;
        padding: 10px;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 13px;
        text-align: left;

        color: #666666;


    }
    .number{
        text-align: right;
    }

    .filter{
        background: #FFFFFF;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        border-radius: 0 0 3px 3px;
        padding: 15px;

    }
    .filter-row .dropdown .btn{
        border: 1px solid #CCCCCC;
        box-sizing: border-box;
        border-radius: 3px;
        width: 100%;
        display: block;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 11px;
        white-space: inherit;
        color: #727272;
    }
    .btn-add{
        border: 1px solid #CCCCCC;
        box-sizing: border-box;
        border-radius: 3px;
        display: block;
        padding: 0 4px;
        width: auto!important;
        position: absolute;
        left: -10px;
    }
    .filter-row{
        padding: 10px;
        text-align: left;
    }
    .filter-row .row{
        margin-bottom: 10px;
    }
    .mail-button{
        background: #F6F6F6;
        border: 1px solid #CCCCCC;
        box-sizing: border-box;
        border-radius: 3px;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 14px;
        color: #727272;
        height: 30px;
        margin-right: 10px;
    }
    h6{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 15px;
        margin-bottom: 15px;
        color: #3F4756;


    }

    .mail-button img{
        margin-right: 6px;
        margin-bottom: 2px;
    }
    .date-header{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 15px;
        color: #3F4756;
        display: table-cell;
        padding: 4px 2px;
    }
    .order-header{
        position: absolute;

    }
    .form-control{
        height: calc(1.2em + .75rem);
    }
    .form-control:focus{
        border-color: #e9ecef;
        box-shadow: 0 0 0 0.2rem rgba(233, 236, 239, 0.13);
    }
    .input-group>.input-group-prepend>.input-group-text{
        border-top-right-radius: .25rem;
        border-bottom-right-radius: .25rem;
    }
    .input-group>.form-control:not(:last-child) {
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 15px;
        color: #727272;
    }

    .input-txt{
        border: 1px solid #CCCCCC;
        box-sizing: border-box;
        border-radius: 3px;
        width: 100%;
        position: relative;

    }

    .option-row{
        border: 1px solid #CCCCCC;
        box-sizing: border-box;
        border-radius: 3px;
        margin: 1% 14%;
        padding-top: 1rem;
        width: 100%;
    }
    .page-link{
        border: none;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 12px;
        letter-spacing: 0.4em;

        color: #474747;
        text-align: center;
        padding: 1px 2px;
        display: block;
    }
    .page-item.active .page-link {
        z-index: 1;
        color: #474747;
        background-color: transparent;

        border: 1.4px solid #474747;
        border-radius: 1px;
        text-align: center;
    }
</style>