(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"/XAh":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return i}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),l=a("013z");a("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},p={_frontmatter:o},r=l.a;function i(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(r,c({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"MCM Manages applications by defining them as custom resource definitions in Kubernetes. By defining these resources we can install, delete and update resources on the managed MCM clusters. When these MCM resources are created the changes are applied on the target MCM cluster via the MCM Klusterlet."),Object(n.b)("p",null,"In the next sections we will explore the different resources MCM provides."),Object(n.b)("h2",null,"Channels"),Object(n.b)("p",null,"The channel resource defines the location of an resource to be deployed. These resources can be a Helm repository, Kubernetes namespace, Object store or Git repository."),Object(n.b)("p",null,"The sample below describes a Channel the points to a HelmRepo."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"kubectl create -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata: \n  name: google-deployables\n---\napiVersion: app.ibm.com/v1alpha1\nkind: Channel\nmetadata:\n  name: google-incubator-repo\n  namespace: google-deployables\nspec:\n    type: HelmRepo\n    pathname: http://storage.googleapis.com/kubernetes-charts-incubator\nEOF\n")),Object(n.b)("p",null,"Once the channel definition above has been applied you can get your channel."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc get channels -n google-deployables\nNAME                    TYPE       PATHNAME                                                    AGE\ngoogle-incubator-repo   HelmRepo   http://storage.googleapis.com/kubernetes-charts-incubator   3m41s\n")),Object(n.b)("p",null,"When the channel is created it will query the target HelmRepo and create MCM ",Object(n.b)("inlineCode",{parentName:"p"},"deployables")," for each of the Helm charts in the repo."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc get deployables -n google-deployables\nNAME                                                               TEMPLATE-KIND   TEMPLATE-APIVERSION    AGE     STATUS\ngoogle-incubator-repo-artifactory-5.2.1                            HelmRelease     app.ibm.com/v1alpha1   5m39s\ngoogle-incubator-repo-aws-alb-ingress-controller-0.1.12            HelmRelease     app.ibm.com/v1alpha1   5m38s\ngoogle-incubator-repo-azuremonitor-containers-2.5.0                HelmRelease     app.ibm.com/v1alpha1   5m43s\n...\n...\n...\napp.ibm.com/v1alpha1   5m43s\ngoogle-incubator-repo-tensorflow-inception-0.4.1                   HelmRelease     app.ibm.com/v1alpha1   5m45s\ngoogle-incubator-repo-vault-0.23.4                                 HelmRelease     app.ibm.com/v1alpha1   5m50s\ngoogle-incubator-repo-vaultingkube-0.1.2                           HelmRelease     app.ibm.com/v1alpha1   5m50s\ngoogle-incubator-repo-webpagetest-agent-0.2.0                      HelmRelease     app.ibm.com/v1alpha1   5m50s\ngoogle-incubator-repo-webpagetest-server-0.2.1                     HelmRelease     app.ibm.com/v1alpha1   5m38s\ngoogle-incubator-repo-xray-0.3.2                                   HelmRelease     app.ibm.com/v1alpha1   5m49s\n")),Object(n.b)("p",null,"You can see that all the Helm charts are now available as ",Object(n.b)("inlineCode",{parentName:"p"},"deployables")," and are available to be deployed using MCM. In this section a HelmRepo has been used as an example of a Channel. You can find additional information on Channels here: ",Object(n.b)("a",c({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/mcm/applications/managing_channels.html"}),"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/mcm/applications/managing_channels.html")),Object(n.b)("h2",null,"Placement Rules"),Object(n.b)("p",null,"PlacementRules are an MCM resource that define where resources should be deployed. PlacementRules by themeselves do not do anything, but can be included as a reference in other resource types or embedded in other MCM resource types."),Object(n.b)("p",null,"Below is an example:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"kubectl create -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata: \n  name: etcd-project\n---\napiVersion: app.ibm.com/v1alpha1\nkind: PlacementRule\nmetadata:\n  name: my-placementrule\n  namespace: etcd-project\n  generation: 1\n  labels:\n    purpose: myapp\nspec:\n  clusterReplicas: 1\n  clusterLabels:\n    matchLabels:\n      cluster: myapp\nEOF\n")),Object(n.b)("p",null,"The example PlacementRule is defining a rule called ",Object(n.b)("inlineCode",{parentName:"p"},"my-placementrule")," and will deploy the only on clusters that match the label ",Object(n.b)("inlineCode",{parentName:"p"},"myapp"),". This is a simple example, but PlacementRules can be used to determine number of replicas and more complex logic can be applied to control where MCM resources will be deployed."),Object(n.b)("p",null,"More information on PlacementRules can be found here: ",Object(n.b)("a",c({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/mcm/applications/managing_placement_rules.html"}),"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/mcm/applications/managing_placement_rules.html")),Object(n.b)("h2",null,"Subscriptions"),Object(n.b)("p",null,"The Subscription resource is the resource that combines the ",Object(n.b)("inlineCode",{parentName:"p"},"Channel")," and the ",Object(n.b)("inlineCode",{parentName:"p"},"PlacementRule")," to determine which resources should be deployed and where they should be deployed. A subscription does this by referencing a specific Deployable resource defined by a Channel and will either embed a PlacementRule or reference an existing PlacementRule. The Subscription can also modify the defualt values that maybe defined in a Deployable by defining ",Object(n.b)("inlineCode",{parentName:"p"},"overrides"),"."),Object(n.b)("p",null,"Example Subscription:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),'kubectl create -f - <<EOF\napiVersion: app.ibm.com/v1alpha1\nkind: Subscription\nmetadata:\n  name: etcd\n  namespace: etcd-project\n  labels:\n    purpose: myapp\nspec:\n  channel: google-deployables/google-incubator-repo\n  name: etcd\n  packageFilter:\n    version: 0.7.3\n  placement:\n    placementRef:\n      name: my-placementrule\n      kind: PlacementRule\n      group: app.ibm.com\n  overrides:\n    - clusterName: "/"\n      clusterOverrides:\n      - path: "metadata.namespace"\n        value: myapp\nEOF\n')),Object(n.b)("p",null,"In the example above we are creating a namespace called ",Object(n.b)("inlineCode",{parentName:"p"},"etc-subscription")," and we are creating a Subscription in that namespace called ",Object(n.b)("inlineCode",{parentName:"p"},"etcd"),". The subscription references the etcd version 0.7.3 Helm chart in the google-incbuator Channel created earier and references the PlacementRule ",Object(n.b)("inlineCode",{parentName:"p"},"my-placementrule"),". At the end of the subscription an override is defined to deploy the Helm chart in the namespace ",Object(n.b)("inlineCode",{parentName:"p"},"myapp")," instead of the default namespace."),Object(n.b)("p",null,"Note: The PlacementRule must be in the same namespace as the Subscription."),Object(n.b)("p",null,"After this is Subsciption is applied we can view our Subscription."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc get deployables.app.ibm.com -A | grep Subscription | grep etcd\netcd-project           etcd-deployable                                                    Subscription    app.ibm.com/v1alpha1   3m59s   Propagated\n")),Object(n.b)("p",null,"Notice that this shows that we created a Subscription and the status shows ",Object(n.b)("inlineCode",{parentName:"p"},"Propagated"),". This shows us that we have successfully created the Subscription, but there are no clusters that meet the criteria as targets for out PlacementRule."),Object(n.b)("p",null,"First let’s get our available clusters"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc get clusters -A\nNAMESPACE   NAME      MANAGED BY   ENDPOINTS                           STATUS   AGE\nctcp4ai     ctcp4ai   hub0         api.ctcp4ai.ocp.csplab.local:6443   Ready    15h\n")),Object(n.b)("p",null,"Next let’s add the ",Object(n.b)("inlineCode",{parentName:"p"},"myapp")," label to the ",Object(n.b)("inlineCode",{parentName:"p"},"ctcp4ai")," cluster."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc label cluster ctcp4ai -n ctcp4ai cluster=myapp\n")),Object(n.b)("p",null,"Now let’s check our Subscription again "),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc get deployables.app.ibm.com -A | grep Subscription | grep etcd\nctcp4ai                etcd-deployable-fh798                                              Subscription    app.ibm.com/v1alpha1   3m58s   Deployed\netcd-project           etcd-deployable                                                    Subscription    app.ibm.com/v1alpha1   3m59s   Propagated\n")),Object(n.b)("p",null,"Now we see that there is an additional Subscription in the namespace of the target cluster that shows ",Object(n.b)("inlineCode",{parentName:"p"},"Deployed"),". The HelmChart should now be deployed on the target cluster."),Object(n.b)("h4",null,"From the target system"),Object(n.b)("p",null,"Once the Subsciption shows ",Object(n.b)("inlineCode",{parentName:"p"},"Deployed")," on the MCM Hub server you should be able to see the subscription on the target cluster:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc get subscriptions.app.ibm.com --all-namespaces | grep etcd\nmyapp       etcd                    Subscribed   11m\n")),Object(n.b)("p",null,"In addition since this is a Helm chart subscription you should see a ",Object(n.b)("inlineCode",{parentName:"p"},"helmrelease")," object as well:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc get helmreleases.app.ibm.com --all-namespaces | grep etcd\nmyapp       etcd-etcd-myapp                           14m\n")),Object(n.b)("p",null,"Finally we can see that the Helm chart was deployed to the ",Object(n.b)("inlineCode",{parentName:"p"},"myapp")," namespace."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc get po -n myapp\nNAME      READY     STATUS    RESTARTS   AGE\netcd-0    1/1       Running   0          8m17s\netcd-1    1/1       Running   0          7m59s\netcd-2    1/1       Running   0          7m42s\n")),Object(n.b)("p",null,"Additional documentation can be found to describe the Subscription resource here: ",Object(n.b)("a",c({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/mcm/applications/managing_subscriptions.html"}),"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/mcm/applications/managing_subscriptions.html")),Object(n.b)("h2",null,"Applications"),Object(n.b)("p",null,"The Application resource is used to reference other MCM resources that we want to define as an Application. Since an Application may be composed of multiple MCM resources we can use selectors to compine the different components."),Object(n.b)("p",null,"If you login to the MCM Console and Navigate to Manage Applications you will not see our etcd subscription. Even though we have already deployed the components we will not be able to manage them as a whole until we create an Application resource."),Object(n.b)("p",null,"See the example below:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"kubectl create -f - <<EOF\napiVersion: app.k8s.io/v1beta1\nkind: Application\nmetadata:\n  name: etcd-application\n  namespace: etcd-project\nspec:\n  selector:\n    matchLabels:\n      purpose: myapp\n  componentKinds:\n  - group: app.ibm.com\n    kind: Subscription\nEOF\n")),Object(n.b)("p",null,"MCM channel documentation"),Object(n.b)("p",null,Object(n.b)("a",c({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/mcm/applications/managing_channels.html"}),"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/mcm/applications/managing_channels.html")))}i.isMDXComponent=!0},"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),l=a("q1tI"),c=a.n(l),o=a("NmYn"),p=a.n(o),r=a("OKom"),i=a("k4MR"),s=a("TSYQ"),b=a.n(s),m=a("QH2O"),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,l=void 0===n?[]:n;return Object(u.b)("div",{className:b()(m.pageHeader,(t={},t[m.withTabs]=l.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},a)))))},h=a("pEPl"),g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,l=a||n,c=l.baseUrl,o=l.subDirectory,p=c+"/edit/"+l.branch+o+"/src/pages"+t;return c?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:p},"Edit this page on GitHub"))):null},j=a("FCXl"),y=(a("Oyvg"),a("Wbzz")),w=a("I8xM");var f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=p()(e,{lower:!0}),c=l===n,o=new RegExp(n+"(?!-)"),r=a.replace(o,l);return Object(u.b)("li",{key:e,className:b()((t={},t[w.selectedItem]=c,t),w.listItem)},Object(u.b)(y.Link,{className:w.link,to:""+r},e))}));return Object(u.b)("div",{className:w.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:w.list},l))))))},n}(c.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,l=e.location,c=e.Title,o=t.frontmatter,s=void 0===o?{}:o,b=t.relativePagePath,m=t.titleType,h=s.tabs,g=s.title,y=s.theme,w=s.description,N=s.keywords,C=n.data.site.pathPrefix,S=C?l.pathname.replace(C,""):l.pathname,M=h?S.split("/").filter(Boolean).slice(-1)[0]||p()(h[0],{lower:!0}):"";return Object(u.b)(i.a,{tabs:h,homepage:!1,theme:y,pageTitle:g,pageDescription:w,pageKeywords:N,titleType:m},Object(u.b)(d,{title:c?Object(u.b)(c,null):g,label:"label",tabs:h}),h&&Object(u.b)(f,{slug:S,tabs:h,currentTab:M}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:b})),Object(u.b)(j.a,{pageContext:t,location:l,slug:S,tabs:h,currentTab:M}),Object(u.b)(r.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-mcm-concepts-index-mdx-1cff21dbf249857084c6.js.map