<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loan Calculator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous"
    />
    <style>
        #loading, #results{
            display: none;
        }
    </style>
</head>
<body class="bg-dark">
    <div class="container">
        <div class="row">
            <div class="col-mid-6 mx-auto">
                <div class="card card-body text-center mt-5">
                    <h1 class="heading display-5 pd-3">Loan Calculator</h1>
                <form id="loan-form">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">$</div>
                            </div>
                            <input type="number" placeholder="Loan Amount" id="loan_amount" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">%</div>
                            </div>
                            <input type="number" placeholder="interest" id="interest" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="number" placeholder="Years to Pay" id="Year" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-dark btn-block" value="calculate"/>
                    </div>
                </form>
                <div id="loading">
                    <img src="https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif" alt=""/>
                </div>
                <div id="results" class="pt-4">
                    <h5>Results</h5>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Monthly Payment</div>
                            </div>
                            <input type="number" id="Monthly Payment" class="form-control"
                            disabled/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Total Amount</div>
                            </div>
                            <input type="number" id="Total Amount" class="form-control"
                            disabled/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Total interest</div>
                            </div>
                            <input type="number" id="Total interest" class="form-control"
                            disabled/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
