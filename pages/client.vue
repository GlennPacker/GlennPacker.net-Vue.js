<template>
  <v-container>
    <h3 style="padding-bottom: 25px;">Clients using Vue JS</h3>

    <v-layout row wrap>
      <panel color="#ff711e">
        <div slot="header">Branthill Computing</div>
        <div
          slot="main"
        >Green field application development for inventory Management, forecasting, demand planning and inventory control</div>
        <div slot="additional">
          <ul mb-3>
            <li>Agile</li>
            <li>Back End</li>
            <li>SQL Server</li>
            <li>Front end</li>
            <li>Vue JS, JSON, CSS, JavaScript</li>
            <li>TDD - Test Driven Development</li>
            <li>Jest</li>
          </ul>
          <p>
            <span>Apr 2018 - Apr 2019</span>
          </p>
        </div>
      </panel>

      <panel color="#ffe11e">
        <div slot="header">Airops Software</div>
        <div slot="main">Aviation management system for aircraft operators and brokers.</div>
        <div slot="additional">
          <ul mb-3>
            <li>Agile</li>
            <li>Back End</li>
            <li>Web Api, SQL Server, Dapper, Entity Framework</li>
            <li>Front end</li>
            <li>Vue JS, JSON, Vuetify, ag-Grid, CSS, JavaScript</li>
            <li>TDD - Test Driven Development</li>
            <li>Nunit, MOQ, Jest, Jasmine</li>
          </ul>
          <p>
            <span>Aug -March 2018</span>
          </p>
        </div>
      </panel>

      <panel color="#c71eff">
        <div slot="header">Lummesse</div>
        <div slot="main">Front end development for the Sony, Panasonic and Ey Learning portals.</div>
        <div slot="additional">
          <ul>
            <li>Front end</li>
            <li>
              JavaScript,
              <a href="http://vuejs.glennpacker.net/" target="_blank">Vue Js</a>, CSS, HTML 5, Node JS, jQuery
            </li>
          </ul>
          <p>
            <span>April -May 2017</span>
          </p>
        </div>
      </panel>
    </v-layout>

    <h3 style="padding: 25px 0;">All Recent Clients</h3>

    <v-layout row wrap>
      <panel color="#c71eff">
        <div slot="header">Hastings Direct</div>
        <div slot="main">Application development for the insurance industry.</div>
        <div slot="additional">
          <ul mb-3>
            <li>Front end</li>
            <li>Angular JS, JSON, CSS, JavaScript</li>
            <li>TDD - Test Driven Development</li>
            <li>Jest</li>
          </ul>
          <p>
            <span>Apr 2019 - Jul 2019</span>
          </p>
        </div>
      </panel>

      <panel color="#ff711e">
        <div slot="header">Branthill Computing</div>
        <div
          slot="main"
        >Green field application development for inventory Management, forecasting, demand planning and inventory control</div>
        <div slot="additional">
          <ul mb-3>
            <li>Agile</li>
            <li>Back End</li>
            <li>SQL Server</li>
            <li>Front end</li>
            <li>Vue JS, JSON, CSS, JavaScript</li>
            <li>TDD - Test Driven Development</li>
            <li>Jest</li>
          </ul>
          <p>
            <span>Apr 2018 - Apr 2019</span>
          </p>
        </div>
      </panel>

      <panel color="#ffe11e">
        <div slot="header">Airops Software</div>
        <div slot="main">Aviation management system for aircraft operators and brokers.</div>
        <div slot="additional">
          <ul>
            <dt>Agile</dt>
            <dt>Back End</dt>
            <dd>Web Api, SQL Server, Dapper, Entity Framework</dd>
            <dt>Front end</dt>
            <dd>Vue JS, JSON, Vuetify, ag-Grid, CSS, JavaScript</dd>
            <dt>TDD - Test Driven Development</dt>
            <dd>Nunit, MOQ, Jest, Jasmine</dd>
          </ul>
          <p>
            <span>Aug -March 2018</span>
          </p>
        </div>
      </panel>

      <panel color="#ffe11e">
        <div slot="header">Telephonica</div>
        <div
          slot="main"
        >Make a single tenant application suitable for multiple clients with a variety of client specific options</div>
        <div slot="additional">
          <ul>
            <dt>Agile</dt>
            <dt>Back End</dt>
            <dd>Web Api, Dynamo DB, Autofac, Fluent Validations, Express Mapper, NLog</dd>
            <dt>Front end</dt>
            <dd>Angular JS, JSON, CSS, LESS, Bootstrap, HTML 5, JavaScript</dd>
            <dt>TDD - Test Driven Development</dt>
            <dd>MS Test, MOQ, Jasmine</dd>
          </ul>

          <p>
            <span>June -Aug 2017</span>
          </p>
        </div>
      </panel>

      <panel color="#c71eff">
        <div slot="header">Lummesse</div>
        <div slot="main">Front end development for the Sony, Panasonic and Ey Learning portals</div>
        <div slot="additional">
          <ul>
            <dt>Front end</dt>
            <dd>JavaScript, Vue Js, CSS, HTML 5, Node JS, jQuery</dd>
          </ul>
          <p>April -May 2017</p>
        </div>
      </panel>

      <panel color="#ff711e">
        <div slot="header">Airbus Space and Defense</div>
        <div slot="main">Full stack development on satelite measurement and recording</div>
        <div slot="additional">
          <ul>
            <dt>Agile</dt>
            <dt>Back End Technologies</dt>
            <dd>C#, ASP.net, MVC, SQL, Server, Web Api, Dapper, XML, Master Data Services, Entity Framework</dd>
            <dt>Front End Technologies</dt>
            <dd></dd>
            <dd>Razor, TypeScript, JavaScript, JQuery, Bootstrap, Kendo</dd>
            <dt>TDD - Test Driven Development</dt>
            <dd>MS Test, MOQ, Jasmine</dd>
          </ul>
          <p>Feb – April 2017</p>
        </div>
      </panel>

      <panel color="#ff711e">
        <div slot="header">Saga</div>
        <div slot="main">Insurance renewals, Holiday Insurance and Data viewer</div>
        <div slot="additional">
          <div>
            <ul>
              <dt>Agile</dt>
              <dt>Back End Technologies</dt>
              <dd>C#, Oracle, ASP.net MVC, SQL Server, Ninject, Web Api, Dapper, ASP.NET web forms, XML, Console Applications</dd>
              <dt>Front End Technologies</dt>
              <dd>HTML 5, Bootstrap, Razor, LESS, CSS, Angular JS, JavaScript, jQuery, JSON</dd>
              <dt>TDD - Test Driven Development</dt>
              <dd>nUnit, MOQ, Jasmine</dd>
            </ul>
          </div>
          <p>March 2016 – Jan 2017 (Extended)</p>
        </div>
      </panel>

      <panel color="#ffe11e">
        <div slot="header">Access Group</div>
        <div
          slot="main"
        >Adding new features into a scheduling system for the care industry (Mail Merge, APIs and data exports)</div>
        <div slot="additional">
          <ul>
            <dt>Agile</dt>
            <dt>Back End Technologies</dt>
            <dd>VB.net, Asp.net Web Forms, SQL Server, Stored Procedures, SQL/TSQL, XML</dd>
            <dt>Front End Technologies</dt>
            <dd>Angular JS</dd>
          </ul>

          <p>Nov 2015 – March 2016</p>
        </div>
      </panel>

      <panel color="#c71eff">
        <div slot="header">BeValued</div>
        <div
          slot="main"
        >Design and development of a fitting centre portal for the insurance claims industry.</div>
        <div slot="additional">
          <ul>
            <dt>Agile</dt>
            <dt>Back End Technologies</dt>
            <dd>VB.net, Asp.net Web Forms, SQL Server, Stored Procedures, SQL/TSQL, XML</dd>
            <dt>Front End Technologies</dt>
            <dd>Angular JS</dd>
          </ul>
          <p>April 2014 – Nov 2015</p>
        </div>
      </panel>

      <panel color="#c71eff">
        <div slot="header">Smith &amp; Ouzman</div>
        <div slot="main">Design and development of a security printing application.</div>
        <div slot="additional">
          <ul>
            <dt>Agile</dt>
            <dt>Back End Technologies</dt>
            <dd>ASP.NET MVC 3 &amp; 4, SQL Server, TSQL/SQL, Stored Procedures, C#, WCF, Entity Framework, MVCMailer, Unity</dd>
            <dt>Front End Technologies</dt>
            <dd>HTML, jQuery, JavaScript, CSS, AJAX, JSON, Razor</dd>
            <dt>TDD</dt>
            <dd>nUnit, Fake It Easy, Ms Test</dd>
          </ul>

          <p>April 2013– April 2014</p>
        </div>
      </panel>

      <panel color="#ff711e">
        <div slot="header">Darwin Consultants</div>
        <div slot="main">SQL Reporting Services, Web Developer and Winforms</div>
        <div slot="additional">
          <ul>
            <dt>Technologies</dt>
            <dd>
              ASP.NET Web Forms,
              HTML,
              SQL Reporting services,
              Crystal Reports,
              SQL Server,
              TSQL/SQL,
              Stored Procedures,
              jQuery,
              JavaScript,
              CSS,
              VB.NET,
              Classic ASP,
              IIS,
              VB script,
              WCF,
              SVN,
              SSIS
            </dd>
          </ul>

          <p>May 2012– March 2013</p>
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
      }
    };
  }
};
</script>
<style scoped>
ul {
  padding: 16px;
  padding-left: 30px;
}
</style>