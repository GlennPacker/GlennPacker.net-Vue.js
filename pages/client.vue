<template>
  <v-container>
    <h3 style="padding-bottom: 25px;">Clients using Vue JS</h3>

    <v-layout row wrap>
      <panel :color="panelColors[8-(index%9)]" v-for="(client, index) in vueClients" :key="index">
        <div slot="header">{{client.name}}</div>
        <div slot="main">{{client.summary}}</div>
        <div slot="additional">
          <ul>
            <dt>Agile</dt>
            <template v-if="hasBackEnd(client)">
              <dt>Back End Technologies</dt>
              <dd>
                <span v-for="beTech in backEndLinks(client)" :key="beTech.text">
                  <a :href="beTech.link">{{beTech.text}}</a>,
                </span>
                <template v-if="backEndItems(client)">{{ backEndItems(client) }}</template>
              </dd>
            </template>
            <template v-if="hasFrontEnd(client)">
              <dt>Front End Technologies</dt>
              <dd>
                <span v-for="tech in frontEndLinks(client)" :key="tech.text">
                  <a :href="tech.link">{{tech.text}}</a>,
                </span>
                <template v-if="frontEndItems(client)">{{ frontEndItems(client) }}</template>
              </dd>
            </template>
            <template v-if="client.testTech">
              <dt>TDD / Test</dt>
              <dd>{{client.testTech.join(', ')}}</dd>
            </template>
          </ul>

          <p>{{client.when}}</p>
        </div>
      </panel>
    </v-layout>

    <h3 style="padding: 25px 0;">All Recent Clients</h3>

    <v-layout row wrap>
      <panel :color="panelColors[index%9]" v-for="(client, index) in clients" :key="index">
        <div slot="header">{{client.name}}</div>
        <div slot="main">{{client.summary}}</div>
        <div slot="additional">
          <ul>
            <dt>Agile</dt>
            <template v-if="hasBackEnd(client)">
              <dt>Back End Technologies</dt>
              <dd>
                <span v-for="beTech in backEndLinks(client)" :key="beTech.text">
                  <a :href="beTech.link">{{beTech.text}}</a>,
                </span>
                <template v-if="backEndItems(client)">{{ backEndItems(client) }}</template>
              </dd>
            </template>
            <template v-if="hasFrontEnd(client)">
              <dt>Front End Technologies</dt>
              <dd>
                <span v-for="tech in frontEndLinks(client)" :key="tech.text">
                  <a :href="tech.link">{{tech.text}}</a>,
                </span>
                <template v-if="frontEndItems(client)">{{ frontEndItems(client) }}</template>
              </dd>
            </template>
            <template v-if="client.testTech">
              <dt>TDD / Test</dt>
              <dd>{{client.testTech.join(', ')}}</dd>
            </template>
          </ul>

          <p>{{client.when}}</p>
        </div>
      </panel>
    </v-layout>
  </v-container>
</template>
<script>
import panel from "../components/panel";

export default {
  components: {
    panel
  },
  head() {
    return {
      title: "GlennPacker.net Clients",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "glennpacker.net clients"
        }
      ]
    };
  },
  data() {
    return {
      panelColors: [
        "#ff711e",
        "#ffe11e",
        "#c71eff",
        "#ffe11e",
        "#c71eff",
        "#ff711e",
        "#c71eff",
        "#ff711e",
        "#ffe11e"
      ],
      vs: {
        showC1: false,
        showC2: false,
        other: {
          showC1: false,
          showC2: false,
          showC4: false,
          showC5: false,
          showC6: false,
          showC7: false,
          showC8: false,
          showC9: false
        }
      },
      clients: [
        {
          name: "Hastings Direct",
          jobTitle: "Full Stack Developer",
          when: "May 2019 - Present",
          summary: "Application development for the insurance industry.",
          projectStyle: "Agile",
          testTech: ["Jest"],
          technologies: [
            {
              text: "Angular",
              isBackEnd: false,
              link: "//angular.glennpacker.net"
            },
            { isBackEnd: false, text: "JSON" }
          ]
        },
        {
          name: "Branthill Computing",
          jobTitle: "Front End Developer",
          when: "Apr 2018 - Apr 2019",
          summary:
            "Green field application development for inventory Management, forecasting, demand planning and inventory control",
          projectStyle: "Agile",
          testTech: ["Jest"],
          technologies: [
            { text: "Vue Js", isBackEnd: false, link: "vuejs.glennpacker.net" },
            { isBackEnd: false, text: "JSON" },
            { isBackEnd: true, text: "SQL" }
          ]
        },
        {
          name: "Airops Software",
          jobTitle: "Full Stack Developer",
          when: "Aug 2017 - Mar 2018",
          summary:
            "Green field application development for aviation management",
          projectStyle: "Agile",
          testTech: ["Jest", "Nunit", "MoQ", "Jasmine"],
          technologies: [
            { isBackEnd: true, text: "Web API" },
            { isBackEnd: true, text: "SQL Server" },
            { isBackEnd: true, text: "Autofac" },
            { isBackEnd: true, text: "Entity Framework" },
            { isBackEnd: true, text: "Dapper" },
            { isBackEnd: true, text: ".Net Core" },
            {
              isBackEnd: false,
              text: "Angular 5",
              link: "http://angular.glennpacker.net/"
            },
            {
              isBackEnd: false,
              text: "Vue Js",
              link: "//vuejs.glennpacker.net/"
            },
            { isBackEnd: false, text: "Vuetify" },
            { isBackEnd: false, text: "JSON" },
            { isBackEnd: false, text: "CSS" },
            { isBackEnd: false, text: "Material Design" },
            { isBackEnd: false, text: "Bootstrap" },
            { isBackEnd: false, text: "JavaScript" }
          ]
        },
        {
          name: "Movement Statgies/Telephonica",
          jobTitle: "Full Stack Developer",
          when: "Jun - Aug 2017",
          projectStyle: "Agile",
          summary:
            "Make a single tenant application (Movement Strategies) suitable for multiple clients with a variety of client specific options",
          testTech: ["NUnit", "Moq", "Jasmine"],
          technologies: [
            {
              isBackEnd: false,
              text: "Angular Js",
              link: "//angular.glennpacker.net/"
            },
            { isBackEnd: false, text: "JSON" },
            { isBackEnd: true, text: "Web Api 2" },
            { isBackEnd: true, text: "Dynamo DB" },
            { isBackEnd: true, text: "AWS" },
            { isBackEnd: false, text: "JavaScript" },
            { isBackEnd: false, text: "CSS" },
            { isBackEnd: false, text: "Bootstrap" },
            { isBackEnd: false, text: "HTML 5" },
            { isBackEnd: true, text: "Autofac" },
            { isBackEnd: true, text: "Fluent Validations" },
            { isBackEnd: true, text: "Express Mapper" },
            { isBackEnd: true, text: "NLog" },
            { text: "MOQ" },
            { text: "NUnit" }
          ]
        },
        {
          name: "Great Night Out",
          jobTitle: "Full Stack Developer",
          when: "Jun 2013 - Jan 2018",
          summary: "Green field application development for event planning",
          projectStyle: "Agile",
          testTech: ["NUnit", "Fake It Easy"],
          technologies: [
            {
              text: "Angular Js",
              isBackEnd: false,
              link: "//angular.glennpacker.net/"
            },
            { text: "JSON", isBackEnd: false },
            { isBackEnd: true, text: "Web Api 2" },
            { isBackEnd: true, text: "SQL Server" },
            { isBackEnd: false, text: "JavaScript" },
            { isBackEnd: false, text: "CSS" },
            { isBackEnd: false, text: "Bootstrap" },
            { text: "HTML 5", isBackEnd: false },
            { isBackEnd: true, text: "Unity" },
            { text: "Fake It Easy" },
            { text: "NUnit" }
          ]
        },
        {
          name: "Lumesse",
          jobTitle: "Front end developer",
          projectStyle: "Agile",
          when: "April - May 2017",
          summary:
            "Front end development for the Sony, Panasonic and Ey Learning portals",
          technologies: [
            {
              text: "Vue Js",
              link: "//vuejs.glennpacker.net",
              isBackEnd: false
            },
            { text: "JavaScript", isBackEnd: false },
            { text: "JSON", isBackEnd: false },
            { text: "CSS", isBackEnd: false },
            { text: "HTML 5", isBackEnd: false },
            { text: "jQuery", isBackEnd: false }
          ]
        },
        {
          name: "Airbus Space and Defence",
          jobTitle: "Full Stack Developer",
          projectStyle: "Agile",
          when: "Feb – April 2017",
          summary:
            "Full stack development on satelite measurement and recording",
          testTech: ["MS Test", "MoQ", "Jasmine"],
          technologies: [
            { isBackEnd: true, text: "C#" },
            { isBackEnd: true, text: "ASP.net MVC" },
            { isBackEnd: true, text: "SQL Server" },
            { isBackEnd: true, text: "Web Api" },
            { isBackEnd: true, text: "Dapper" },
            { text: "XML", isBackEnd: false },
            { isBackEnd: true, text: "Master Data Services" },
            { isBackEnd: true, text: "Entity Framework" },
            { text: "Razor", isBackEnd: true },
            { text: "TypeScript", isBackEnd: false },
            { text: "JavaScript", isBackEnd: false },
            { text: "JQuery", isBackEnd: false },
            { text: "Bootstrap", isBackEnd: false }
          ]
        },
        {
          name: "Saga",
          jobTitle: "Full Stack Developer",
          projectStyle: "Agile",
          when: "Mar 2016 – Jan 2017",
          summary:
            "Full stack development for insurance renewals, holiday insurance and data viewer",
          testTech: ["NUnit", "MoQ", "Jasmine"],
          technologies: [
            { isBackEnd: true, text: "C#" },
            { isBackEnd: true, text: "ASP.net MVC" },
            { isBackEnd: true, text: "Oracle" },
            { isBackEnd: true, text: "SQL Server" },
            { isBackEnd: true, text: "Dapper" },
            { isBackEnd: true, text: "Ninject" },
            {
              text: "Angular Js",
              link: "//angular.glennpacker.net",
              isBackEnd: false
            },
            { isBackEnd: true, text: "Web API" },
            { text: "HTML 5", isBackEnd: false },
            { text: "Bootstrap", isBackEnd: false },
            { text: "Razor", isBackEnd: false },
            { text: "LESS", isBackEnd: false },
            { text: "CSS", isBackEnd: false },
            { text: "JavaScript", isBackEnd: false },
            { text: "jQuery", isBackEnd: false }
          ]
        },
        {
          name: "Access Group",
          jobTitle: "Full Stack Developer",
          projectStyle: "Agile",
          when: "Nov 2015 – Mar 2016",
          summary:
            "Adding new features into a scheduling system for the care industry (Mail Merge, APIs and data exports)",
          technologies: [
            { isBackEnd: true, text: "VB.net" },
            { isBackEnd: true, text: "Asp.net Web Forms" },
            { isBackEnd: true, text: "SQL Server" },
            {
              isBackEnd: false,
              text: "Angular Js",
              link: "//angular.glennpacker.net"
            }
          ]
        },
        {
          name: "BeValued",
          jobTitle: "Full Stack Developer",
          projectStyle: "Agile",
          when: "Apr 2014 – Nov 2015",
          summary:
            "Design and development of a fitting centre portal for the insurance claims industry.",
          testTech: ["NUnit", "FakeItEasy"],
          technologies: [
            { isBackEnd: true, text: "C#" },
            { isBackEnd: true, text: "Web Api 2" },
            { isBackEnd: true, text: "MVC4" },
            {
              text: "Angular Js",
              link: "//angular.glennpacker.net/",
              isBackEnd: false
            },
            { isBackEnd: true, text: "Entity Framework" },
            { isBackEnd: true, text: "nHibernate" },
            { isBackEnd: true, text: "StructureMap" },
            { isBackEnd: true, text: "Ninject" },
            { isBackEnd: true, text: "Autofac" },
            { isBackEnd: true, text: "NServicebus" },
            { isBackEnd: true, text: "SQL Server" },
            { isBackEnd: true, text: "Log4net" },
            { isBackEnd: true, text: "NLog" },
            { text: "HTML 5", isBackEnd: false },
            { text: "JavaScript", isBackEnd: false },
            { text: "JQuery", isBackEnd: false },
            { text: "CSS", isBackEnd: false },
            { text: "Underscore Js", isBackEnd: false },
            { isBackEnd: false, text: "Razor" },
            { text: "Bootstrap", isBackEnd: false },
            { text: "NuGet", isBackEnd: true },
            { text: "JSON", isBackEnd: false },
            { isBackEnd: true, text: "Classic Asp" }
          ]
        }
      ]
    };
  },
  computed: {
    vueClients() {
      return this.clients.filter(client =>
        client.technologies.some(t => t.text.toLowerCase().includes("vue"))
      );
    }
  },
  methods: {
    backEndItems(client) {
      const items = client.technologies.filter(r => r.isBackEnd && !r.link);
      return items.map(item => item.text).join(", ");
    },
    backEndLinks(client) {
      return client.technologies.filter(r => r.isBackEnd && r.link);
    },
    frontEndItems(client) {
      const items = client.technologies.filter(r => !r.isBackEnd && !r.link);
      return items.map(item => item.text).join(", ");
    },
    frontEndLinks(client) {
      return client.technologies.filter(r => !r.isBackEnd && r.link);
    },
    hasBackEnd(client) {
      return client.technologies.some(r => r.isBackEnd);
    },
    hasFrontEnd(client) {
      return client.technologies.some(r => !r.isBackEnd);
    }
  }
};
</script>
<style scoped>
ul {
  padding: 16px;
  padding-left: 30px;
}
dt {
  font-weight: 600;
}
</style>