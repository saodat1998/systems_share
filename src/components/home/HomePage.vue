<template>

    <div class="calendar">
        <div class="container">
            <div class="table-header"><h3>Current statistics</h3></div>
            <div class="table-container">
                <table class="table">

                    <thead>
                    <tr>
                        <th class="sub-header">Yuklatilgan topshiriqlar:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Nazoratdagi: </th>
                        <td>351</td>
                    </tr>
                    <tr>
                        <th scope="row">Muddati o'tgan: </th>
                        <td>35</td>
                    </tr>
                    <tr>
                        <th scope="row">Ijro muddati kelmagan</th>
                        <td>12</td>
                    </tr>

                    </tbody>
                </table>
            </div>
            <div class="org-title"><h4>Organizer</h4>
            </div>
            <full-calendar :config="config" :events="events"/>
        </div>

    </div>

</template>

<script>
    import moment from 'moment'
    export default {
        name: 'hello',
        data () {
            return {
                eventSources: [
                    {
                        events(start, end, timezone, callback) {
                            self.$http.get(`/myFeed`, {timezone: timezone}).then(response => {
                                callback(response.data.data)
                            })
                        },
                        color: 'yellow',
                        textColor: 'black',
                    },
                    {
                        events(start, end, timezone, callback) {
                            self.$http.get(`/anotherFeed`, {timezone: self.timezone}).then(response => {
                                callback(response.data.data)
                            })
                        },
                        color: 'red',
                    },
                ],
                events: [
                    {
                        title: 'test',
                        allDay: true,
                        start: moment(),
                        end: moment().add(1, 'd'),
                    },
                    {
                        title: 'another test',
                        start: moment().add(2,'d'),
                        end: moment().add(2, 'd').add(2, 'h'),
                    },
                ],
                config: {
                    defaultView: 'month',
                     eventRender: function(event, element) {
                          console.log(event)
                     },
                    themeSystem: "bootstrap4",
                    header:{
                        left:   'prev, next, today,title',
                        center: '',
                        right:  'month, agendaWeek, agendaDay'
                    },

                },
            }
        }
    }

</script>

<style scoped>

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
    .table-header{
        width: 100%;
        height: 50px;
        background: #F4F4F4;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        margin-bottom: 0;
        padding: 13px;
    }
    .table-header h3{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 18px;
        text-align: center;
        color: #474747;
    }
    .table-container{
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        padding: 1% 1%;

    }
    .table{
        width: 20%;
    }
    .table thead th{
        border-bottom: none;
    }
    .sub-header{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 500!important;
        line-height: normal;
        font-size: 17px;
        text-align: center;

        color: #434343;


    }
    .table td, .table th {
        border: none;
        padding: 1px;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 15px;
        text-align: left;
        color: #666666;


    }
</style>