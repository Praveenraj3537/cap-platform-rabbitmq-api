
module.exports = {
  Topics:  [
    {
      TopicName: "USERS1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertUSERS1",
          OnSuccessTopicsToPush: ["USERS1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "USERS1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertUSERS1",
          OnSuccessTopicsToPush: ["USERS1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "USERS1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertUSERS1",
          OnSuccessTopicsToPush: ["USERS1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANTS1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANTS1",
          OnSuccessTopicsToPush: ["TENANTS1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANTS1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANTS1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANTS1",
          OnSuccessTopicsToPush: ["TENANTS1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANTS1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANTS1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANTS1",
          OnSuccessTopicsToPush: ["TENANTS1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANTS1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_USERS1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_USERS1",
          OnSuccessTopicsToPush: ["TENANT_USERS1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USERS1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_USERS1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_USERS1",
          OnSuccessTopicsToPush: ["TENANT_USERS1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USERS1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_USERS1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_USERS1",
          OnSuccessTopicsToPush: ["TENANT_USERS1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USERS1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_USER_APPS1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_USER_APPS1",
          OnSuccessTopicsToPush: ["TENANT_USER_APPS1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APPS1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_USER_APPS1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_USER_APPS1",
          OnSuccessTopicsToPush: ["TENANT_USER_APPS1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APPS1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_USER_APPS1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_USER_APPS1",
          OnSuccessTopicsToPush: ["TENANT_USER_APPS1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APPS1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_USER_APP_ROLES1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_USER_APP_ROLES1",
          OnSuccessTopicsToPush: ["TENANT_USER_APP_ROLES1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APP_ROLES1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_USER_APP_ROLES1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_USER_APP_ROLES1",
          OnSuccessTopicsToPush: ["TENANT_USER_APP_ROLES1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APP_ROLES1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_USER_APP_ROLES1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_USER_APP_ROLES1",
          OnSuccessTopicsToPush: ["TENANT_USER_APP_ROLES1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APP_ROLES1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_USER_APP_ALERTS1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_USER_APP_ALERTS1",
          OnSuccessTopicsToPush: ["TENANT_USER_APP_ALERTS1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APP_ALERTS1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_USER_APP_ALERTS1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_USER_APP_ALERTS1",
          OnSuccessTopicsToPush: ["TENANT_USER_APP_ALERTS1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APP_ALERTS1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_USER_APP_ALERTS1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_USER_APP_ALERTS1",
          OnSuccessTopicsToPush: ["TENANT_USER_APP_ALERTS1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APP_ALERTS1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_APPS1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_APPS1",
          OnSuccessTopicsToPush: ["TENANT_APPS1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_APPS1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_APPS1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_APPS1",
          OnSuccessTopicsToPush: ["TENANT_APPS1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_APPS1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_APPS1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_APPS1",
          OnSuccessTopicsToPush: ["TENANT_APPS1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_APPS1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_APP_FEATURES1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_APP_FEATURES1",
          OnSuccessTopicsToPush: ["TENANT_APP_FEATURES1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_APP_FEATURES1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_APP_FEATURES1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_APP_FEATURES1",
          OnSuccessTopicsToPush: ["TENANT_APP_FEATURES1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_APP_FEATURES1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "TENANT_APP_FEATURES1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertTENANT_APP_FEATURES1",
          OnSuccessTopicsToPush: ["TENANT_APP_FEATURES1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_APP_FEATURES1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "ROLES1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertROLES1",
          OnSuccessTopicsToPush: ["ROLES1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ROLES1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "ROLES1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertROLES1",
          OnSuccessTopicsToPush: ["ROLES1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ROLES1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "ROLES1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertROLES1",
          OnSuccessTopicsToPush: ["ROLES1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ROLES1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "FEATURES1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertFEATURES1",
          OnSuccessTopicsToPush: ["FEATURES1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "FEATURES1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "FEATURES1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertFEATURES1",
          OnSuccessTopicsToPush: ["FEATURES1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "FEATURES1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "FEATURES1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertFEATURES1",
          OnSuccessTopicsToPush: ["FEATURES1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "FEATURES1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "FEATURE_PERMISSIONS1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertFEATURE_PERMISSIONS1",
          OnSuccessTopicsToPush: ["FEATURE_PERMISSIONS1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "FEATURE_PERMISSIONS1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "FEATURE_PERMISSIONS1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertFEATURE_PERMISSIONS1",
          OnSuccessTopicsToPush: ["FEATURE_PERMISSIONS1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "FEATURE_PERMISSIONS1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "FEATURE_PERMISSIONS1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertFEATURE_PERMISSIONS1",
          OnSuccessTopicsToPush: ["FEATURE_PERMISSIONS1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "FEATURE_PERMISSIONS1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "CLIENTS1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertCLIENTS1",
          OnSuccessTopicsToPush: ["CLIENTS1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CLIENTS1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "CLIENTS1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertCLIENTS1",
          OnSuccessTopicsToPush: ["CLIENTS1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CLIENTS1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "CLIENTS1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertCLIENTS1",
          OnSuccessTopicsToPush: ["CLIENTS1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CLIENTS1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "APPS1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertAPPS1",
          OnSuccessTopicsToPush: ["APPS1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "APPS1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "APPS1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertAPPS1",
          OnSuccessTopicsToPush: ["APPS1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "APPS1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "APPS1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertAPPS1",
          OnSuccessTopicsToPush: ["APPS1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "APPS1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "APP_ROLES1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertAPP_ROLES1",
          OnSuccessTopicsToPush: ["APP_ROLES1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "APP_ROLES1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "APP_ROLES1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertAPP_ROLES1",
          OnSuccessTopicsToPush: ["APP_ROLES1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "APP_ROLES1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "APP_ROLES1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertAPP_ROLES1",
          OnSuccessTopicsToPush: ["APP_ROLES1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "APP_ROLES1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "APP_MESSAGES1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertAPP_MESSAGES1",
          OnSuccessTopicsToPush: ["APP_MESSAGES1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "APP_MESSAGES1_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "APP_MESSAGES1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertAPP_MESSAGES1",
          OnSuccessTopicsToPush: ["APP_MESSAGES1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "APP_MESSAGES1_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "APP_MESSAGES1_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertAPP_MESSAGES1",
          OnSuccessTopicsToPush: ["APP_MESSAGES1_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "APP_MESSAGES1_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    }
  ]
};