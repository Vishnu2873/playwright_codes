

module.exports={
    default:{
        require:["tests/steps/*.steps.js",
            "tests/support/hooks.js",
            "tests/support/execution.js"

        ],
        paths:["tests/feature/*.feature"],
        publishQuiet:true,
        format:[
            "progress",
            "html:reports/cucumber-html-report.html"
        ]
    }
}